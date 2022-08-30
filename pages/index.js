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
                <div className="nav__link">Features</div>
                <div className="nav__link">Pricing</div>
                <div className="nav__link">Resources</div>
              </div>
              <div className="nav__account">
                <p className="nav__link nav__login">Login</p>
                <div className="nav__btn pill-btn">Sign In</div>
              </div>
            </div>
          </nav>
          <div className="banner">
            <div className="banner__info">
              <h1 className="banner__title ">More than just shorter links</h1>
              <p className="banner__para">
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </p>
              <div className="banner__btn pill-btn">Get Started</div>
            </div>
            <img src="../images/banner-desktop-img.svg" alt="working-illustration" className="banner__img desktop" />
            <img src="../images/banner-mobile-img.svg " alt="working-illustration" className="banner__img mobile" />
          </div>
        </header>
        <main className="main">
          <div className="shorten">
            <input type="text" placeholder="Shorten a link here" />
            <div className="box-btn">Shorten it</div>
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
                    <img src="../images/icon-brand-recognition.svg" alt="avatar" />
                  </div>
                </div>
                <div className="benfit__bottom">
                  <h4 className="benfit__title">Brand Recognition</h4>
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
                    <img src="../images/icon-detailed-records.svg" alt="avatar" />
                  </div>
                </div>
                <div className="benfit__bottom">
                  <h4 className="benfit__title">Detailed Records</h4>
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
                    <img src="../images/icon-fully-customizable.svg" alt="avatar" />
                  </div>
                </div>
                <div className="benfit__bottom">
                  <h4 className="benfit__title">Fully Customizable</h4>
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
            <div className="pill-btn">Get Started</div>
          </div>
        </main>
        <footer className="footer">
          <img src="" alt="" className="img" />
          <div className="menu">
            <div className="nav">
              <div className="links">
                <h4 className="link header">Features</h4>
                <p className="link">Analytics</p>
                <p className="link">Link Shortening</p>
                <p className="link">Branded Links</p>
              </div>
              <div className="links">
                <h4 className="link header">Resources</h4>
                <p className="link">Support</p>
                <p className="link">Blog</p>
                <p className="link">Developers</p>
              </div>
              <div className="links">
                <h4 className="link header">Company</h4>
                <p className="link">About</p>
                <p className="link">Our Team</p>
                <p className="link">Careers</p>
                <p className="link">Contact</p>
              </div>
            </div>
            <div className="icons"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
