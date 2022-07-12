import { EuiButtonIcon, EuiDraggable, EuiDroppable, EuiFlexGroup, EuiFlexItem, EuiIcon, EuiPanel } from '@elastic/eui'
import React from 'react'

interface DropzoneComponentProps {
    itemState : never[]
    isItemRemovable: boolean
    remove : (droppableId: any, index: any) => void
    droppableArea: string
    title: string

}
function Dropzone({itemState, isItemRemovable, remove, droppableArea, title} : DropzoneComponentProps) {
  return (
    <EuiDroppable droppableId={droppableArea} withPanel style={{
        paddingTop : "20px",
        paddingBottom: "20px"
    }} >
    {itemState.length ? (
      itemState.map(({ content, id }, idx) => (
        <EuiDraggable
          key={id}
          index={idx}
          draggableId={id}
          spacing="l"
          isRemovable={isItemRemovable}
        >
          <EuiPanel >
            <EuiFlexGroup gutterSize="none" alignItems="center">
              <EuiFlexItem >{content}</EuiFlexItem>
              <EuiFlexItem grow={false}>
                {isItemRemovable ? (
                  <EuiIcon type="trash" color="danger" />
                ) : (
                  <EuiButtonIcon
                    iconType="cross"
                    aria-label="Remove"
                    onClick={() =>
                      remove("droppableArea", idx)
                    }
                  />
                )}
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiDraggable>
      ))
    ) : (
      <EuiFlexGroup
        alignItems="center"
        justifyContent="spaceAround"
        gutterSize="none"
        style={{ height: "100%" }}
      >
        <EuiFlexItem grow={false}>
          Drop Items {title} here
        </EuiFlexItem>
      </EuiFlexGroup>
    )}
  </EuiDroppable>
  )
}

export default Dropzone