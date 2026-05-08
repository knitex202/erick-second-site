import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import instagramWhite from "../Assets/instagram-white.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Campaigns", path: "/campaigns" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="portfolio-nav">
      <NavLink to="/" className="portfolio-brand" onClick={() => setShowMenu(false)}>
        Erick Cedeno
      </NavLink>

      <nav className="portfolio-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `portfolio-link ${isActive ? "portfolio-link-active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="portfolio-mobile-actions">
        <a
          href="https://www.instagram.com/mr.erickcedeno/"
          target="_blank"
          rel="noreferrer"
          className="portfolio-instagram portfolio-instagram-mobile"
          aria-label="Open Erick Cedeno on Instagram"
        >
          <img src={instagramWhite} alt="" />
        </a>

        <button
          type="button"
          className="portfolio-menu"
          aria-label="Toggle navigation menu"
          aria-expanded={showMenu}
          onClick={() => setShowMenu((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
      </div>

      {showMenu ? (
        <nav className="portfolio-mobile-menu" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setShowMenu(false)}
              className={({ isActive }) =>
                `portfolio-mobile-link ${isActive ? "portfolio-mobile-link-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

export default Navbar;
