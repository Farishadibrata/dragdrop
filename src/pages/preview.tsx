import React, { useState } from "react";
import { useEffect } from "react";
import Gallery from "../component/gallery";
import Jokes from "../component/jokes";
import Quotes from "../component/quotes";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

const CustomComponents: any = {
  Gallery,
  Jokes,
  "Random Quotes": Quotes,
};
function Preview() {
  const [contents, setContents] = useState<any>();
  useEffect(() => {
    setContents(JSON.parse(localStorage.getItem("Contents")!));
  }, []);
  if(!contents) return <div>Loading...</div>;
  return (
    <>
      <EuiFlexGroup>
        <EuiFlexItem>
          {contents["leftContents"].map((item: any) => {
            const SpecificStory = CustomComponents[item];
            return <SpecificStory/>;
          })}
        </EuiFlexItem>
        <EuiFlexItem>
          {contents["centerContents"].map((item: any) => {
            const SpecificStory = CustomComponents[item];
            return <SpecificStory/>;
          })}
        </EuiFlexItem>
        <EuiFlexItem>
          {contents["righContents"].map((item: any) => {
            const SpecificStory = CustomComponents[item];
            return <SpecificStory/>;
          })}
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
}

export default Preview;
