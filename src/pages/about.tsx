import { useEuiFontSize } from "@elastic/eui";

function AboutPage() {
  const titleSize = useEuiFontSize("xl");
  return (
    <>
    <div
      className="eui-textCenter"
      style={{
        fontSize: titleSize.fontSize,
      }}
    >
      Drag And drop Component React
    </div>
    <div style={{
        marginTop : "20px",
    }}>
        Following are Example to create Drag and drop react component, along with example how to example fetching the data from API separately, feel free to try it out.<br/>
        Made using React, React-Query, Eui, Elastic-UI, and many other libraries. <br/>
        <a href="https://github.com/Farishadibrata/dragdrop" target={"_blank"}>
            Github
        </a>
    </div>
    </>

  );
}

export default AboutPage;
