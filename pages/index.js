import Head from "next/head";
import Image from "next/image";

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
                  <p className="nav__link">Sign In</p>
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
          <div className="shorten">
            <div className="shortenURL__form">
              <div className="shortenURL__input">

                <input
                className="shortenURL__input--field"
                type="text"
                placeholder="Shorten a link here"
                />
                <p className="shortenURL__error">please add a link</p>
                </div>
              <div className="shortenURL__btn box-btn">
                <p>Shorten it</p>
              </div>
            </div>
           <div className="shortenURL__list">
            <div className="shortenURL__item">
              <p className="shortenURL__oriAddress">https://www.frontendmentor.io</p>
              <p className="shortenURL__newAddress">https://rel.ink/k4lKyk</p>
              <div className="shortenURL__btn box-btn">
                <p>Copy</p>
              </div>
            </div>
            <div className="shortenURL__item">
              <p className="shortenURL__oriAddress">https://www.frontendmentor.io</p>
              <p className="shortenURL__newAddress">https://rel.ink/k4lKyk</p>
              <div className="shortenURL__btn box-btn">
                <p>Copy</p>
              </div>
            </div>
            <div className="shortenURL__item">
              <p className="shortenURL__oriAddress">https://www.frontendmentor.io</p>
              <p className="shortenURL__newAddress">https://rel.ink/k4lKyk</p>
              <div className="shortenURL__btn box-btn">
                <p>Copy</p>
              </div>
            </div>
           </div> 
          </div>
          <div className="benefits">
            <div className="benefits__hook">
              <h2 className="benefits__title">Advanced Statistics</h2>
              <p className="benefits__para">
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <div className="benefits__container">
              <div className="benfit">
                <div className="benfit__top">
                  <div className="benfit__circle">
                    <img
                      src="../images/icon-brand-recognition.svg"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="benfit__bottom">
                  <h3 className="benfit__title">Brand Recognition</h3>
                  <p className="benfit__para">
                    Boost your brand recognition with each click. Generic links
                    don’t mean a thing. Branded links help instil confidence in
                    your content.
                  </p>
                </div>
              </div>
              <div className="benfit">
                <div className="benfit__top">
                  <div className="benfit__circle">
                    <img
                      src="../images/icon-detailed-records.svg"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="benfit__bottom">
                  <h3 className="benfit__title">Detailed Records</h3>
                  <p className="benfit__para">
                    Gain insights into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better decisions.
                  </p>
                </div>
              </div>
              <div className="benfit">
                <div className="benfit__top">
                  <div className="benfit__circle">
                    <img
                      src="../images/icon-fully-customizable.svg"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="benfit__bottom">
                  <h3 className="benfit__title">Fully Customizable</h3>
                  <p className="benfit__para">
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </p>
                </div>
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
              <img
                src="../images/icon-facebook.svg"
                alt="facebook"
                className="footer__logo"
              />
              <img
                src="../images/icon-twitter.svg"
                alt="twitter"
                className="footer__logo"
              />
              <img
                src="../images/icon-pinterest.svg"
                alt="pinterest"
                className="footer__logo"
              />
              <img
                src="../images/icon-instagram.svg"
                alt="instagram"
                className="footer__logo"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
