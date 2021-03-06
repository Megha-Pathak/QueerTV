import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, usePlaylists } from "../../contexts";
import { removePlaylistService } from "../../services";
import { SET_PLAYLISTS } from "../../constants/queer-constants";
import { UserActivityCard } from "../../components";

export const PlaylistPage = () => {
  const { playlistId } = useParams();
  const navigate = useNavigate();

  const { auth } = useAuth();
  const { playlists, dispatchPlaylists } = usePlaylists();

  const currentPlaylist = playlists.find(
    (playlist) => playlist._id === playlistId
  );

  const removePlaylistHandler = async () => {
    const removePlaylistResponse = await removePlaylistService(
      auth.token,
      playlistId
    );
    if (removePlaylistResponse !== undefined) {
      navigate("/explore", { replace: true });
      dispatchPlaylists({
        type: SET_PLAYLISTS,
        payload: removePlaylistResponse,
      });
      toast.success("Video successfully removed from Playlist");
    }
  };

  return (
    <div className="user-property-page">
      <div className="user-property-page-cover">
        <div className="user-property-page-cover-media">
          <img
            className="user-property-page-cover-img"
            src={
              currentPlaylist?.videos?.length === 0
                ? "/assets/Coke/default-playlist-preview.png"
                : `https://img.youtube.com/vi/${currentPlaylist?.videos[0]?._id}/maxresdefault.jpg`
            }
            alt={currentPlaylist?.title}
          />
          <div className="user-property-page-cover-title">
            <span className="material-icons">playlist_add</span>
            <span>{currentPlaylist?.title}</span>
          </div>
        </div>
        <p>{currentPlaylist?.description}</p>
        <button
          className="btn btn-primary user-property-page-cover-action"
          onClick={removePlaylistHandler}
        >
          Delete Playlist
        </button>
      </div>
      <div className="user-property-page-videos">
        {currentPlaylist?.videos?.map((playlistVideo) => (
          <UserActivityCard key={playlistVideo._id} video={playlistVideo} />
        ))}
      </div>
    </div>
  );
};
