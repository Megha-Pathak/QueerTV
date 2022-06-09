import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ExplorePage,
  HomePage,
  SignInPage,
  SignUpPage,
  SingleVideoPage,
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
      </Routes>
    </div>
  );
};
