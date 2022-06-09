import React from "react";
import "./HomeSection.css";

export const HomeSection = ({ banner }) => {
  const { title, description, imageUrl, cta, ctaLink } = banner;

  return (
    <div className="banner">
      <section className="banner-details">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-desc">{description}</p>
        <div className="banner-actions">
          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = `${ctaLink}`)}
          >
            {cta}
          </button>
        </div>
      </section>
      <section className="banner-img">
        <img src={imageUrl} title="  QueerTV" alt="  QueerTV" />
      </section>
    </div>
  );
};
