import React from "react";
import Benefits from "./Benefits";
import Shorten from "./shorten";

export default function Main() {
  return (
    <main className="main">
      <Shorten />
      {/* <div className="hook">
        <h2 className="hook__title">Advanced Statistics</h2>
        <p className="hook__para">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div> */}
      <Benefits />
      <div className="CTA">
        <h2 className="CTA__tilte">Boost your links today</h2>
        <div className="CTA__btn btn">
          <p>Get Started</p>
        </div>
      </div>
    </main>
  );
}
