import React from "react";
import { Menu } from "@mui/icons-material";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src="../images/nav-logo.svg" alt="logo" className="nav__logo" />
        <Menu className="nav__menuIcon mobile" />
        <div className="nav__menu desktop">
          <div className="nav__links">
            <p className="nav__link">Features</p>
            <p className="nav__link">Pricing</p>
            <p className="nav__link">Resources</p>
          </div>
          <div className="nav__account">
            <p className="nav__link nav__login">Login</p>
            <div className="nav__btn btn">
              <p className="nav__btn">Sign In</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="banner">
        <div className="banner__info">
          <h1 className="banner__title ">More than just shorter links</h1>
          <h3 className="banner__para">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </h3>
          <div className="banner__btn btn">
            <p>Get Started</p>
          </div>
        </div>
        <img
          src="../images/header-desktop-img.svg"
          alt="working-illustration"
          className="banner__img desktop"
        />
        <img
          src="../images/header-mobile-img.svg"
          alt="working-illustration"
          className="banner__img mobile"
        />
      </div>
    </header>
  );
}
