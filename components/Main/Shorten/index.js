import React, { useState } from "react";
import Form from "./form";
export default function Shorten() {
  // const [oriAddress, setOriAddress] = useState('https://www.frontendmentor.io')
  const [errorMessage, setErrorMessage] = useState("please add a link");
  const [error, setError] = useState(false);
  const [oriAddress, setOriAddress] = useState("");
  const [newAddress, setNewAddress] = useState("https://rel.ink/k4lKyk");
  const [addresses, setAddresses] = useState([
    { addresses: { origin: oriAddress, new: newAddress } },
  ]);
  // console.log(error,addresses);
  const validateInput = (e, focus = false) => {
    let regex = /(www|http:|https:)+[^\s]+[\w]/;
    if (focus) {
      setError(false);
    } else if (oriAddress === "") {
      setErrorMessage("please add a link");
      setError(true);
    } else if (!regex.test(oriAddress)) {
      setErrorMessage("please add a valid link");
      setError(true);
    }
  };
  const submitURL = (e) => {
    e.preventDefault();
    validateInput(e);
    setAddresses;
    console.log(errorMessage);
  };
  return (
    <div className="shortenURL">
      <Form
        oriAddress={oriAddress}
        setOriAddress={setOriAddress}
        error={error}
        setError={setError}
        errorMessage={errorMessage}
        validateInput={validateInput}
        submitURL={submitURL}
      />
      <div className="list">
        {addresses.map(({ addresses }, i) => (
          <div className="list__item" key={"item" + i}>
            <p className="list__oriAddress">{addresses.origin}</p>
            <p className="list__newAddress">{addresses.new}</p>
            <button
              className={`list__btn ${false ? "list__btn--copied" : ""} btn`}
            >
              {false ? <p>Copied!</p> : <p>Copy</p>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
