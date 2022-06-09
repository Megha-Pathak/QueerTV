import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSection.css";

export const Banner = ({ banner }) => {
  const { title, description, imageUrl, cta, ctaLink } = banner;

  const navigate = useNavigate();

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
            {console.log(ctaLink)}
          </button>
        </div>
      </section>
      <section className="banner-img">
        <img src={imageUrl} title="  QueerTV" alt="  QueerTV" />
      </section>
    </div>
  );
};
