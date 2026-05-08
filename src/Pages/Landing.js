import React from "react";
import { Link } from "react-router-dom";
import erickhomeImage from "../Assets/galleryImages/erick16.9-image.png";

function Landing() {
  return (
    <main className="screen-page">
      <section className="hero-screen">
        <img
          src={erickhomeImage}
          alt="Erick Cedeno model portrait"
          className="hero-image"
        />
        <div className="hero-shade" />

        <div className="hero-content">
          <h1 className="display-heading">
            Erick
            <span>Cedeno</span>
          </h1>
          <p className="hero-meta">
            Model
            <span>Commercial, lifestyle, and campaign work</span>
          </p>
          <div className="hero-actions">
            <Link to="/campaigns" className="text-link">
              View campaigns
            </Link>
            <Link to="/contact" className="text-link">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Landing;
