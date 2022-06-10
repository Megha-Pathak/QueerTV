import React from "react";
import { Link } from "react-router-dom";
import "./NothingToShowPage.css";

export const NothingToShowPage = () => {
  return (
    <div className="nothing-to-show">
      <div className="nothing-to-show-content">
        <h2 className="nothing-to-show-title">Nothing to see here!</h2>
        <img
          className="nothing-to-show-img"
          src={"/assets/nothingtoShow.svg"}
          alt="Empty!"
        />
        <Link className="btn btn-primary" to="/explore">
          Explore Now!
        </Link>
      </div>
    </div>
  );
};
