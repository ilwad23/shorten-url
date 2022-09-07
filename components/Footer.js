import React from 'react'
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="footer">
    <img
      src="../images/footer-logo.svg"
      alt="logo"
      className="footer__logo"
    />
    <div className="footer__menu">
      <div className="footer__nav">
        <div className="footer__links">
          <p className="footer__link footer__link--header">Features</p>
          <p className="footer__link">Analytics</p>
          <p className="footer__link">Link Shortening</p>
          <p className="footer__link">Branded Links</p>
        </div>
        <div className="footer__links">
          <p className="footer__link footer__link--header">Resources</p>
          <p className="footer__link">Support</p>
          <p className="footer__link">Blog</p>
          <p className="footer__link">Developers</p>
        </div>
        <div className="footer__links">
          <p className="footer__link footer__link--header">Company</p>
          <p className="footer__link">About</p>
          <p className="footer__link">Our Team</p>
          <p className="footer__link">Careers</p>
          <p className="footer__link">Contact</p>
        </div>
      </div>
      <div className="footer__icons">
        <Facebook className="footer__icon" />
        <Twitter className="footer__icon" />
        <Pinterest className="footer__icon" />
        <Instagram className="footer__icon" />
      </div>
    </div>
  </footer>
  )
}
