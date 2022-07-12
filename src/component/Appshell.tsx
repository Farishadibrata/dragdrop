import { useState } from "react";
import { EuiPageTemplate } from "@elastic/eui";
import { useLocation, useNavigate } from "react-router-dom";

export default ({ button = <></>, children, sideNav }: any) => {
  const [showBottomBar, setshowBottomBar] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <EuiPageTemplate
      bottomBar={showBottomBar ? "Bottom bar" : undefined}
      restrictWidth="100%"
      pageHeader={{
        pageTitle: "DragDrop Example",
        rightSideItems: [button],
        tabs: [
          {
            label: "Preview",
            isSelected: location.pathname === "/",
            onClick: () => {
              navigate("/");
            },
          },
          {
            label: "Settings",
            isSelected: location.pathname === "/settings",
            onClick: () => navigate("/settings"),
          },
          {
            label: "About",
            isSelected: location.pathname === "/about",
            onClick: () => navigate("/about"),
          },
        ],
      }}
    >
      {children}
    </EuiPageTemplate>
  );
};
