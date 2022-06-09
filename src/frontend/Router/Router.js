import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./../pages";
import "./Router.css";

export const Router = () => {
  return (
    <div className="router">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};
