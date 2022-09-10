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
            <button className="nav__link"><p>Features</p></button>
            <button className="nav__link"><p>Pricing</p></button>
            <button className="nav__link"><p>Resources</p></button>
          </div>
          <div className="nav__account">
            <button className="nav__link"><p>Login</p></button>
            <button className="nav__btn btn">
              <p className="nav__btn">Sign In</p>
            </button>
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
          <button className="banner__btn btn">
            <p>Get Started</p>
          </button>
        </div>
        <div className="banner__imgWrapper">
        <img
          src="../images/illustration-working.svg"
          alt="working-illustration"
          className="banner__img "
          />
          </div>
      </div>
    </header>
  );
}
