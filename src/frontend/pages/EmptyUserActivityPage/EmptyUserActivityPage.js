import React from "react";
import { Link } from "react-router-dom";
import "./EmptyUserActivityPage.css";

export const EmptyUserActivityPage = () => {
  return (
    <div className="empty-user-activity">
      <div className="empty-user-activity-content">
        <h2 className="empty-user-activity-title">Nothing to see here!</h2>
        <img
          className="empty-user-activity-img"
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
