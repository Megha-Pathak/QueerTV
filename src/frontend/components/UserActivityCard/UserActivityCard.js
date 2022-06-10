import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { MoreModal } from "../MoreModal/MoreModal";
import { nFormatter } from "../../utils";
import "./UserActivityCard.css";

export const UserActivityCard = ({ video }) => {
  const { _id, title, views, uploadedAt } = video;
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <div
      className="user-activity-card"
      onClick={() => navigate(`/explore/${_id}`)}
      onMouseLeave={() => setIsDropdownMenuOpen(false)}
    >
      <img
        className="user-activity-card-img"
        src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
        alt="youtube video"
      />
      <div className="user-activity-card-info">
        <div className="user-activity-card-primary">
          <p className="user-activity-card-title">{title}</p>
        </div>
        <div className="user-activity-card-secondary">
          <span className="vertical-video-card-views">
            {nFormatter(views, 1)} views
          </span>
          <span className="material-icons vertical-video-card-secondary-separator">
            fiber_manual_record
          </span>
          <Moment fromNow>{uploadedAt}</Moment>
        </div>
      </div>
      <div className="user-activity-card-more">
        <MoreModal
          video={video}
          isDropdownMenuOpen={isDropdownMenuOpen}
          setIsDropdownMenuOpen={setIsDropdownMenuOpen}
        />
      </div>
    </div>
  );
};
