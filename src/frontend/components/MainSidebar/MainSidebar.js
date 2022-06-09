import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../../contexts";
import { useOnClickOutside, useWindowSize } from "../../hooks";
import "./MainSidebar.css";

export const MainSidebar = () => {
  const mainSidebarRef = useRef();

  const sidebarLinkClass = ({ isActive }) =>
    isActive ? "expanded-sidebar-link active-link" : "expanded-sidebar-link";

  const { setShowSidebar } = useSidebar();
  const windowSize = useWindowSize();

  useOnClickOutside(mainSidebarRef, () => {
    if (windowSize.width <= 950) {
      setShowSidebar(false);
    }
  });

  const linkClickHandler = () => {
    if (windowSize.width <= 950) {
      setShowSidebar(false);
    }
  };

  return (
    <div ref={mainSidebarRef} className="expanded-sidebar">
      <header className="sidebar-header">
        <section>
          <button className="nav-menu" onClick={() => setShowSidebar(false)}>
            <span className="material-icons nav-menu-icon">close</span>
          </button>
        </section>
        <section className="nav-brand">
          <NavLink className="nav-brand-link" to="/" onClick={linkClickHandler}>
            <img
              src={"/assets/logo.png"}
              className="nav-brand-logo"
              alt="QueerTV"
            />
          </NavLink>
        </section>
      </header>
      <NavLink to="/" className={sidebarLinkClass} onClick={linkClickHandler}>
        <span className="material-icons-outlined sidebar-icon">home</span>
        <span className="sidebar-option">Home</span>
      </NavLink>
      <NavLink
        to="/explore"
        className={sidebarLinkClass}
        onClick={linkClickHandler}
      >
        <span className="material-icons-outlined sidebar-icon">explore</span>
        <span className="sidebar-option">Explore</span>
      </NavLink>
      <NavLink
        to="/history"
        className={sidebarLinkClass}
        onClick={linkClickHandler}
      >
        <span className="material-icons-outlined sidebar-icon">history</span>
        <span className="sidebar-option">History</span>
      </NavLink>
      <NavLink
        to="/watchlater"
        className={sidebarLinkClass}
        onClick={linkClickHandler}
      >
        <span className="material-icons-outlined sidebar-icon">
          watch_later
        </span>
        <span className="sidebar-option">Watch Later</span>
      </NavLink>
      <NavLink
        to="/likes"
        className={sidebarLinkClass}
        onClick={linkClickHandler}
      >
        <span className="material-icons-outlined sidebar-icon">thumb_up</span>
        <span className="sidebar-option">Liked Videos</span>
      </NavLink>
    </div>
  );
};
