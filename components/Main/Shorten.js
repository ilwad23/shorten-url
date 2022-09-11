import React from 'react'

export default function Shorten() {
  return (
    <div className="shortenURL">
    <div className="form">
      <div className="form__container">
        <div className="form__input">
          <input
            className={`form__inputField ${
              true ? "form__inputField--error" : ""
            }`}
            type="text"
            placeholder="Shorten a link here..."
          />
          <p
            className={`form__para ${true ? "form__para--error" : ""}`}
          >
            please add a link
          </p>
        </div>
        <div className="form__btn btn">
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
            false ? "list__btn--copied" : ""
          } btn`}
        >
          {false ? <p>Copied!</p> : <p>Copy</p>}
        </div>
      </div>
      <div className="list__item">
        <p className="list__oriAddress">
          https://www.frontendmentor.io
        </p>
        <p className="list__newAddress">https://rel.ink/k4lKyk</p>
        <div
          className={`list__btn ${true ? "list__btn--copied" : ""} btn`}
        >
          {true ? <p>Copied!</p> : <p>Copy</p>}
        </div>
      </div>
      <div className="list__item list__item--submit">
        <p className="list__oriAddress">
          https://www.frontendmentor.io
        </p>
        <p className="list__newAddress">https://rel.ink/k4lKyk</p>
        <div
          className={`list__btn ${
            false ? "list__btn--copied" : ""
          } btn`}
        >
          {false ? <p>Copied!</p> : <p>Copy</p>}
        </div>
      </div>
    </div>
  </div>
  )
}
