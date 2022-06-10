import React from "react";
import { NothingToShowPage } from "../NothingToShowPage/NothingToShowPage";
import { UserActivityCard } from "../../components";
import { useHistory, useLikes, useWatchLater } from "../../contexts";
import "./UserActivityPage.css";
import { useLocation } from "react-router-dom";

export const UserActivityPage = () => {
  const { likes } = useLikes();
  const { history } = useHistory();
  const { watchLater } = useWatchLater();
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="user-property-page">
      <div className="user-property-page-videos">
        {pathname === "/likes" &&
          (likes.length === 0 ? (
            <NothingToShowPage />
          ) : (
            likes.map((likedVideo) => (
              <UserActivityCard key={likedVideo._id} video={likedVideo} />
            ))
          ))}
        {pathname === "/history" &&
          (history.length === 0 ? (
            <NothingToShowPage />
          ) : (
            history.map((historyVideo) => (
              <UserActivityCard key={historyVideo._id} video={historyVideo} />
            ))
          ))}
        {pathname === "/watchlater" &&
          (watchLater.length === 0 ? (
            <NothingToShowPage />
          ) : (
            watchLater.map((watchLaterVideo) => (
              <UserActivityCard
                key={watchLaterVideo._id}
                video={watchLaterVideo}
              />
            ))
          ))}
      </div>
    </div>
  );
};
