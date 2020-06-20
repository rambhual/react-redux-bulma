import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationComponent = () => {
  const [active, setActive] = useState(false);
  const toggleHamburger = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            alt="logo"
            height="28"
          />
        </a>

        <span
          role="button"
          className={`navbar-burger burger ${active ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => toggleHamburger()}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${active ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <Link className="navbar-item" to="/home">
            Home
          </Link>

          <Link className="navbar-item" to="/doc">
            Documentation
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/" className="navbar-link">
              More
            </Link>

            <div className="navbar-dropdown">
              <Link to="/" className="navbar-item">
                About
              </Link>
              <Link to="/" className="navbar-item">
                Jobs
              </Link>
              <Link to="/" className="navbar-item">
                Contact
              </Link>
              <hr className="navbar-divider" />
              <Link to="/report" className="navbar-item">
                Report an issue
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/signup" className="button is-primary">
                <strong>Sign up</strong>
              </Link>
              <Link to="/signin" className="button is-light">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationComponent;
