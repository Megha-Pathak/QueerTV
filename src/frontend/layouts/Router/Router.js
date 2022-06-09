import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../../components";
import {
  ExplorePage,
  HistoryPage,
  HomePage,
  LikesPage,
  SignInPage,
  SignUpPage,
  VideoPage,
} from "../../pages";
import "./Router.css";

export const Router = () => {
  return (
    <div className="router">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/explore/:videoId" element={<VideoPage />} />
        <Route
          path="/likes"
          element={
            <RequireAuth>
              <LikesPage />
            </RequireAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequireAuth>
              <HistoryPage />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};
