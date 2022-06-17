import React from "react";
import { Route, Routes } from "react-router-dom";
import { RedirectToAuth } from "../components";
import {
  ExplorePage,
  HomePage,
  UserActivityPage,
  SignInPage,
  SignUpPage,
  SingleVideoPage,
  PlaylistPage,
} from "./../pages";
import "./Router.css";

export const Router = () => {
  return (
    <div className="router">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/explore/:videoId" element={<SingleVideoPage />} />
        <Route
          path="/likes"
          element={
            <RedirectToAuth>
              <UserActivityPage />
            </RedirectToAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RedirectToAuth>
              <UserActivityPage />
            </RedirectToAuth>
          }
        />
        <Route
          path="/watchlater"
          element={
            <RedirectToAuth>
              <UserActivityPage />
            </RedirectToAuth>
          }
        />
        <Route
          path="/playlists/:playlistId"
          element={
            <RedirectToAuth>
              <PlaylistPage />
            </RedirectToAuth>
          }
        />
      </Routes>
    </div>
  );
};
