import React from "react";
import { EmptyUserActivityPage } from "../EmptyUserActivityPage/EmptyUserActivityPage";
import { UserActivityCard } from "../../components";
import { useHistory, useLikes, useWatchLater } from "../../contexts";
import "./UserActivityPage.css";
import { removeAllHistoryService } from "../../services";
import { useLocation } from "react-router-dom";

export const UserActivityPage = () => {
  const { likes } = useLikes();
  const { history } = useHistory();
  const { watchLater } = useWatchLater();
  const location = useLocation();
  const { pathname } = location;

  const removeAllHistoryHandler = async () => {
    const removeAllHistoryResponse = await removeAllHistoryService(auth.token);
    if (removeAllHistoryResponse !== undefined) {
      dispatchHistory({ type: SET_HISTORY, payload: removeAllHistoryResponse });
    }
  };

  return (
    <div className="user-property-page">
      {pathname === "/history" && (
        <button
          className="btn btn-primary user-property-page-cover-action"
          onClick={removeAllHistoryHandler}
        >
          Clear All
        </button>
      )}
      <div className="user-property-page-videos">
        {pathname === "/likes" &&
          (likes.length === 0 ? (
            <EmptyUserActivityPage />
          ) : (
            likes.map((likedVideo) => (
              <UserActivityCard key={likedVideo._id} video={likedVideo} />
            ))
          ))}
        {pathname === "/history" &&
          (history.length === 0 ? (
            <EmptyUserActivityPage />
          ) : (
            history.map((historyVideo) => (
              <UserActivityCard key={historyVideo._id} video={historyVideo} />
            ))
          ))}
        {pathname === "/watchlater" &&
          (watchLater.length === 0 ? (
            <EmptyUserActivityPage />
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
