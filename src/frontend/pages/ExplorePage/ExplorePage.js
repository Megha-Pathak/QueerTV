import React from "react";
import { Categories, ExploreVideoCard } from "../../components";
import { useFilters, useVideos } from "../../contexts";
import { getVideosOfCategory } from "../../utils";
import "./ExplorePage.css";

export const ExplorePage = () => {
  const { videos } = useVideos();
  const {
    filters: { category },
  } = useFilters();

  const finalVideos = getVideosOfCategory(videos, category);

  return (
    <div className="explore-page">
      <section className="categories-section">
        <Categories />
      </section>
      <section className="videos-section">
        {finalVideos.map((video) => (
          <ExploreVideoCard key={video._id} video={video} />
        ))}
      </section>
    </div>
  );
};
