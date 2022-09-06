import Head from "next/head";
import Image from "next/image";
import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Shorten-URL</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <header className="header">
          <nav className="nav">
            <img
              src="../images/nav-logo.svg"
              alt="logo"
              className="nav__logo"
            />
            <div className="nav__menu">
              <div className="nav__links">
                <p className="nav__link">Features</p>
                <p className="nav__link">Pricing</p>
                <p className="nav__link">Resources</p>
              </div>
              <div className="nav__account">
                <p className="nav__link nav__login">Login</p>
                <div className="nav__btn pill-btn">
                  <p className="nav__btn">Sign In</p>
                </div>
              </div>
            </div>
          </nav>
          <div className="banner">
            <div className="banner__info">
              <h1 className="banner__title ">More than just shorter links</h1>
              <h3 className="banner__para">
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </h3>
              <div className="banner__btn pill-btn">
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
        <main className="main">
          <div className="shortenURL">
            <div className="form">
              <div className="form__container">
                <div className="form__input">
                  <input
                    className={`form__inputField ${
                      true ? "form__inputField--error":""
                    }`}
                    type="text"
                    placeholder="Shorten a link here..."
                  />
                  <p className={`form__para ${true ? "form__para--error":""}`}>
                    please add a link
                  </p>
                </div>
                <div className="form__btn box-btn">
                  <p>Shorten it</p>
                </div>
              </div>
            </div>
            <div className="list">
              <div className="list__item">
                <p className="list__oriAddress">
                  https://www.frontendmentor.io
                </p>
                <p className="list__newAddress">https://rel.ink/k4lKyk</p>
                <div
                  className={`list__btn ${
                    false ? "list__btn--copied":""
                  } box-btn`}
                >
                  {false? <p>Copied!</p>:<p>Copy</p>}
                </div>
              </div>
              <div className="list__item">
                <p className="list__oriAddress">
                  https://www.frontendmentor.io
                </p>
                <p className="list__newAddress">https://rel.ink/k4lKyk</p>
                <div
                  className={`list__btn ${
                    true ? "list__btn--copied":""
                  } box-btn`}
                >
                  {true? <p>Copied!</p>:<p>Copy</p>}
                </div>
              </div>
              <div className="list__item">
                <p className="list__oriAddress">
                  https://www.frontendmentor.io
                </p>
                <p className="list__newAddress">https://rel.ink/k4lKyk</p>
                <div
                  className={`list__btn ${
                    false ? "list__btn--copied":""
                  } box-btn`}
                >
                  {false? <p>Copied!</p>:<p>Copy</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="hook">
            <h2 className="hook__title">Advanced Statistics</h2>
            <p className="hook__para">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="benefits">
            <div className="benefit">
              <div className="benefit__top">
                <div className="benefit__circle">
                  <img
                    src="../images/icon-brand-recognition.svg"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="benefit__text">
                <h3 className="benefit__title">Brand Recognition</h3>
                <p className="benefit__para">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit__top">
                <div className="benefit__circle">
                  <img src="../images/icon-detailed-records.svg" alt="avatar" />
                </div>
              </div>
              <div className="benefit__text">
                <h3 className="benefit__title">Detailed Records</h3>
                <p className="benefit__para">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit__top">
                <div className="benefit__circle">
                  <img
                    src="../images/icon-fully-customizable.svg"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="benefit__text">
                <h3 className="benefit__title">Fully Customizable</h3>
                <p className="benefit__para">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="CTA">
            <h2 className="CTA__tilte">Boost your links today</h2>
            <div className="CTA__btn pill-btn">
              <p>Get Started</p>
            </div>
          </div>
        </main>
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
              {/* <img
                src="../images/icon-facebook.svg"
                alt="facebook"
                className="footer__icon"
              /> */}
              <Facebook className="footer__icon" />
              <Twitter className="footer__icon" />
              <Pinterest className="footer__icon" />
              <Instagram className="footer__icon" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
