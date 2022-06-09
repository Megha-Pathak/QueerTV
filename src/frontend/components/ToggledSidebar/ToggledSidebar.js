import React from "react";
import { NavLink } from "react-router-dom";
import "./ToggledSidebar.css";

export const ToggledSidebar = () => {
  const sidebarLinkClass = ({ isActive }) =>
    isActive ? "shrinked-sidebar-link active-link" : "shrinked-sidebar-link";

  return (
    <div className="shrinked-sidebar">
      <NavLink to="/" className={sidebarLinkClass}>
        <span title="Home" className="material-icons-outlined sidebar-icon">
          home
        </span>
      </NavLink>
      <NavLink to="/explore" className={sidebarLinkClass}>
        <span title="Explore" className="material-icons-outlined sidebar-icon">
          explore
        </span>
      </NavLink>
      <NavLink to="/history" className={sidebarLinkClass}>
        <span title="History" className="material-icons-outlined sidebar-icon">
          history
        </span>
      </NavLink>
      <NavLink to="/watchlater" className={sidebarLinkClass}>
        <span
          title="Watch Later"
          className="material-icons-outlined sidebar-icon"
        >
          watch_later
        </span>
      </NavLink>
      <NavLink to="/likes" className={sidebarLinkClass}>
        <span
          title="Liked Videos"
          className="material-icons-outlined sidebar-icon"
        >
          thumb_up
        </span>
      </NavLink>
    </div>
  );
};
