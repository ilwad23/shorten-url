import React from "react";

export default function Form({ oriAddress, setOriAddress }) {
  return (
    <div className="form">
      <div className="form__container">
        <div className="form__input">
          <input
            value={oriAddress}
            onChange={(e) => setOriAddress(e.target.value)}
            className={`form__inputField ${
              true ? "form__inputField--error" : ""
            }`}
            type="url"
            placeholder="Shorten a link here..."
          />
          <p className={`form__para ${true ? "form__para--error" : ""}`}>
            please add a link
          </p>
        </div>
        <button className="form__btn btn">
          <p>Shorten it</p>
        </button>
      </div>
    </div>
  );
}
