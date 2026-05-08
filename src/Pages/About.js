import React from "react";
import { Link } from "react-router-dom";
import tableSitting from "../Assets/galleryImages/sitting-on-table.jpg";
import suitWalking from "../Assets/galleryImages/erick-suit-walking.jpg";
import bikeHead from "../Assets/galleryImages/erick-suit-bicycle.jpg";

function About() {
  const stats = [
    ["Height", "5'10\" / 178cm"],
    ["Neck", "15 1/2"],
    ["Sleeve", "33\""],
    ["Waist", "32\""],
    ["Inseam", "30\""],
    ["Shoe", "10.5"],
    ["Hair", "Grey"],
    ["Eyes", "Brown"],
  ];

  return (
    <main className="screen-page">
      <section className="about-screen">
        <div className="about-copy">
          <h1 className="page-heading">About</h1>
          <p>
            Erick Cedeno is a commercial and lifestyle model with campaign work
            spanning fashion, outdoor, watercraft, and culture-driven brands.
          </p>

          <dl className="stat-list">
            {stats.map(([label, value]) => (
              <div className="stat-line" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <Link to="/contact" className="outline-action">
            Contact
            <span>-></span>
          </Link>
        </div>

        <div className="about-collage">
          <img src={tableSitting} alt="Erick Cedeno seated editorial"  />
          <img src={suitWalking} alt="Erick Cedeno walking in suit" className="about-large" />
          <img src={bikeHead} alt="Erick Cedeno campaign portrait" />
        </div>
      </section>
    </main>
  );
}

export default About;
