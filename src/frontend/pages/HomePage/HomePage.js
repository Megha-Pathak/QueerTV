import React from "react";
import { HomeSection } from "../../components";
import { homePageContent } from "./homePageContent";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="home-page-banners">
        {homePageContent.map((banner) => (
          <HomeSection key={banner._id} banner={{ ...banner }} />
        ))}
      </section>
    </div>
  );
};
