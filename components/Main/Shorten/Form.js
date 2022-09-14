import React from "react";

export default function Form({
  inputValue,
  setInputValue,
  error,
  errorMessage,
  validateInput,
  submitURL,
}) {
  return (
    <form className="form" onSubmit={(e) => submitURL(e)}>
      <div className="form__container">
        <div className="form__input">
          <input
            title="Enter url"
            value={inputValue}
            onFocus={(e) => validateInput(e,true)}
            onChange={(e) => setInputValue(e.target.value)}
            className={`form__inputField ${
              error ? "form__inputField--error" : ""
            }`}
            type="url"
            placeholder="Shorten a link here..."
          />
          <p className={`form__para ${error ? "form__para--error" : ""}`}>
            {errorMessage}
          </p>
        </div>
        <button className="form__btn btn" onClick={(e) => submitURL(e)}>
          <p>Shorten it</p>
        </button>
      </div>
    </form>
  );
}
