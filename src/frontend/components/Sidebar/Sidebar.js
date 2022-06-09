import React from "react";
import { useLocation } from "react-router-dom";
import { useSidebar } from "../../contexts";
import { useWindowSize } from "../../hooks";
import { MainSidebar } from "../MainSidebar/MainSidebar";
import { ToggledSidebar } from "../ToggledSidebar/ToggledSidebar";
import "./Sidebar.css";

export const Sidebar = () => {
  const { pathname } = useLocation();

  const sidebarForbiddenPaths = ["/", "/signin", "/signup"];
  const { showSidebar } = useSidebar();

  const windowSize = useWindowSize();

  return (
    !sidebarForbiddenPaths.includes(pathname) &&
    (showSidebar ? (
      <div className="sidebar">
        <MainSidebar />
      </div>
    ) : (
      windowSize.width > 950 && (
        <div className="sidebar">
          <ToggledSidebar />
        </div>
      )
    ))
  );
};
