import React, { useRef } from "react";
import { useLocation, matchPath, useParams } from "react-router-dom";
import {
  SET_HISTORY,
  SET_LIKES,
  SET_PLAYLIST,
  SET_WATCH_LATER,
} from "../../constants/queer-constants";
import {
  useAuth,
  useHistory,
  useLikes,
  useWatchLater,
  usePlaylists,
} from "../../contexts";
import { useOnClickOutside } from "../../hooks";
import {
  addWatchLaterService,
  removeHistoryService,
  removeLikeService,
  removeWatchLaterService,
  removePlaylistService,
} from "../../services";
import "./MoreModal.css";

export const MoreModal = ({
  video,
  isDropdownMenuOpen,
  setIsDropdownMenuOpen,
  showPlaylistModal,
}) => {
  const { auth } = useAuth();
  const { watchLater, dispatchWatchLater } = useWatchLater();
  const { dispatchHistory } = useHistory();
  const { dispatchLikes } = useLikes();
  const { dispatchPlaylists } = usePlaylists();

  const dropdownMenuRef = useRef();

  const { pathname } = useLocation();
  const { playlistId } = useParams();

  useOnClickOutside(dropdownMenuRef, () => setIsDropdownMenuOpen(false));

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownMenuOpen((isDropdownMenuOpen) => !isDropdownMenuOpen);
  };

  const removeWatchLaterHandler = async (e) => {
    e.stopPropagation();
    const removeWatchLaterResponse = await removeWatchLaterService(
      auth.token,
      video._id
    );
    if (removeWatchLaterResponse !== undefined) {
      dispatchWatchLater({
        type: SET_WATCH_LATER,
        payload: removeWatchLaterResponse,
      });
      toast.success("Video successfully removed from Watch Later");
    }
  };

  const addWatchLaterHandler = async (e) => {
    e.stopPropagation();
    const addWatchLaterResponse = await addWatchLaterService(auth.token, video);
    if (addWatchLaterResponse !== undefined) {
      dispatchWatchLater({
        type: SET_WATCH_LATER,
        payload: addWatchLaterResponse,
      });
      toast.success("Video successfully added to Watch Later");
    }
  };

  const saveToPlaylistHandler = (e) => {
    e.stopPropagation();
    showPlaylistModal();
    setIsDropdownMenuOpen(false);
  };

  const removeHistoryHandler = async (e) => {
    e.stopPropagation();
    const removeHistoryResponse = await removeHistoryService(
      auth.token,
      video._id
    );
    if (removeHistoryResponse !== undefined) {
      dispatchHistory({ type: SET_HISTORY, payload: removeHistoryResponse });
      toast.success("Video successfully removed from History");
    }
  };

  const removeLikeHandler = async (e) => {
    e.stopPropagation();
    const removeLikeResponse = await removeLikeService(auth.token, video._id);
    if (removeLikeResponse !== undefined) {
      dispatchLikes({ type: SET_LIKES, payload: removeLikeResponse });
      toast.success("Video successfully removed from Liked");
    }
  };

  const removeVideoFromPlaylistHandler = async (e) => {
    e.stopPropagation();
    const removeVideoFromPlaylistResponse =
      await removeVideoFromPlaylistService(auth.token, playlistId, video._id);
    if (removeVideoFromPlaylistResponse !== undefined) {
      dispatchPlaylists({
        type: SET_PLAYLIST,
        payload: removeVideoFromPlaylistResponse,
      });
      toast.success("Video successfully removed from Playlist");
    }
  };

  return (
    auth.status && (
      <div ref={dropdownMenuRef} className="card-dropdown">
        <button className="card-dropdown-icon" onClick={toggleDropdown}>
          <span className="material-icons">more_vert</span>
        </button>
        {isDropdownMenuOpen && (
          <div className="card-dropdown-menu">
            <ul className="list-simple list-cursor-pointer list-style-none">
              {watchLater.find(
                (watchLaterVideo) => watchLaterVideo._id === video._id
              ) ? (
                <li onClick={removeWatchLaterHandler}>
                  <span className="material-icons-outlined">watch_later</span>
                  Remove from Watch Later
                </li>
              ) : (
                <li onClick={addWatchLaterHandler}>
                  <span className="material-icons-outlined">watch_later</span>
                  Save to Watch Later
                </li>
              )}
              <li onClick={saveToPlaylistHandler}>
                <span className="material-icons">playlist_add</span>
                Save to Playlist
              </li>
              {pathname === "/history" && (
                <li onClick={removeHistoryHandler}>
                  <span className="material-icons-outlined">delete</span>
                  Remove from History
                </li>
              )}
              {pathname === "/likes" && (
                <li onClick={removeLikeHandler}>
                  <span className="material-icons-outlined">delete</span>
                  Remove from Likes
                </li>
              )}
              {matchPath("/playlists/*", pathname) && (
                <li onClick={removeVideoFromPlaylistHandler}>
                  <span className="material-icons-outlined">delete</span>
                  Remove from Playlist
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    )
  );
};
