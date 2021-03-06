import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { MoreModal } from "../MoreModal/MoreModal";
import { PlaylistsModal } from "../PlaylistsModal/PlaylistsModal";
import { nFormatter } from "../../utils";
import "./ExploreVideoCard.css";

export const ExploreVideoCard = ({ video }) => {
  const { _id, title, views, uploadedAt } = video;
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [showPlaylistsModal, setShowPlaylistsModal] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className="vertical-video-card"
      onClick={() => navigate(`/explore/${_id}`)}
      onMouseLeave={() => setIsDropdownMenuOpen(false)}
    >
      <img
        className="vertical-video-card-img"
        src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
        alt={title}
      />
      <div className="vertical-video-card-primary">
        <p className="vertical-video-card-title">{title}</p>
        <div className="vertical-video-card-more">
          <MoreModal
            video={video}
            isDropdownMenuOpen={isDropdownMenuOpen}
            setIsDropdownMenuOpen={setIsDropdownMenuOpen}
            showPlaylistModal={() => setShowPlaylistsModal(true)}
          />
        </div>
      </div>
      <div className="vertical-video-card-secondary">
        <span className="vertical-video-card-views">
          {nFormatter(views, 1)} views
        </span>
        <span className="material-icons vertical-video-card-secondary-separator">
          fiber_manual_record
        </span>
        <Moment fromNow>{uploadedAt}</Moment>
      </div>
      {showPlaylistsModal && (
        <PlaylistsModal
          video={video}
          closePlaylistModal={() => setShowPlaylistsModal(false)}
        />
      )}
    </div>
  );
};
