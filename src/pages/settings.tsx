import React, { DragEventHandler, useState } from "react";
import {
  EuiButtonIcon,
  EuiDragDropContext,
  EuiFlexGroup,
  EuiFlexItem,
  EuiDraggable,
  EuiDroppable,
  EuiIcon,
  EuiPanel,
  euiDragDropCopy,
  euiDragDropReorder,
  htmlIdGenerator,
  EuiTitle,
  EuiButton,
} from "@elastic/eui";
import Dropzone from "./settings.dropzone";

const makeId = htmlIdGenerator();
const list = [
  {
    content: "Random Quotes",
    id: makeId(),
  },
  {
    content: "Gallery",
    id: makeId(),
  },
  {
    content: "Jokes",
    id: makeId(),
  },
];

export default () => {
  const [isItemRemovable, setIsItemRemovable] = useState(false);
  const [list1, setList1] = useState(list);
  const [leftSideBar, setLeftSideBar] = useState([]);
  const [center, setCenter] = useState([]);
  const [rightSideBar, setRightSideBar] = useState([]);
  const droppableList = [
    {
      key: "DROPPABLE_AREA_COPY_2",
      title: "Left Side Bar",
      state: leftSideBar,
    },
    {
      key: "DROPPABLE_AREA_COPY_3",
      title: "Center",
      state: center,
    },
    {
      key: "DROPPABLE_AREA_COPY_4",
      title: "Right Side Bar",
      state: rightSideBar,
    },
  ];
  const lists: any = {
    DROPPABLE_AREA_COPY_1: list1,
    DROPPABLE_AREA_COPY_2: leftSideBar,
    DROPPABLE_AREA_COPY_3: center,
    DROPPABLE_AREA_COPY_4: rightSideBar,
  };
  const actions: any = {
    DROPPABLE_AREA_COPY_1: setList1,
    DROPPABLE_AREA_COPY_2: setLeftSideBar,
    DROPPABLE_AREA_COPY_3: setCenter,
    DROPPABLE_AREA_COPY_4: setRightSideBar,
  };

  const remove = (droppableId: any, index: any) => {
    const list = Array.from(lists[droppableId]);
    list.splice(index, 1);
    actions[droppableId](list);
  };

  const onDragUpdate = ({ source, destination }: any) => {
    const shouldRemove =
      !destination && source.droppableId === "DROPPABLE_AREA_COPY_2";
    setIsItemRemovable(shouldRemove);
  };
  const onDragEnd = ({ source, destination }: any) => {
    if (source && destination) {
      if (source.droppableId === destination.droppableId) {
        const items = euiDragDropReorder(
          lists[destination.droppableId],
          source.index,
          destination.index
        );

        actions[destination.droppableId](items);
      } else {
        const sourceId = source.droppableId;
        const destinationId = destination.droppableId;
        const result = euiDragDropCopy(
          lists[sourceId],
          lists[destinationId],
          source,
          destination,
          {
            property: "id",
            modifier: makeId,
          }
        );

        actions[sourceId](result[sourceId]);
        actions[destinationId](result[destinationId]);
      }
    } else if (!destination && source.droppableId === "DROPPABLE_AREA_COPY_2") {
      remove(source.droppableId, source.index);
    }
  };
  return (
    <>
      <EuiDragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
        <EuiFlexGroup>
          <EuiFlexItem style={{ width: "20%" }}>
            List Panel :
            <EuiDroppable
              droppableId="DROPPABLE_AREA_COPY_1"
              cloneDraggables={true}
              spacing="l"
              style={{
                width: "50%",
              }}
            >
              {list1.map(({ content, id }, idx) => (
                <EuiDraggable
                  key={id}
                  index={idx}
                  draggableId={id}
                  style={{
                    width: "50%",
                  }}
                >
                  <EuiPanel
                    style={{
                      width: "50%",
                    }}
                  >
                    {content}
                  </EuiPanel>
                </EuiDraggable>
              ))}
            </EuiDroppable>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiFlexGroup gutterSize="xl">
          {droppableList.map(({ title, key, state }) => (
            <EuiFlexItem style={{ width: "33%"}}>
              <Dropzone
                itemState={state}
                isItemRemovable={isItemRemovable}
                remove={remove}
                droppableArea={key}
                title={title}
              />
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>
        <EuiFlexItem>
          <EuiButton
          style={{
            marginTop: "20px",
          }}
            onClick={() => {
                let leftContents = leftSideBar.map((item : any) => item.content)
                let centerContents = center.map((item : any) => item.content)
                let righContents = rightSideBar.map((item : any) => item.content)
                localStorage.setItem("Contents", JSON.stringify({leftContents, centerContents, righContents}))
            }}
          >
            Save Settings
          </EuiButton>
        </EuiFlexItem>
      </EuiDragDropContext>
    </>
  );
};
