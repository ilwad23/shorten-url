import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Form from "./form";
export default function Shorten() {
  const [errorMessage, setErrorMessage] = useState("please add a link");
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [oriAddress, setOriAddress] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [copied, setCopied] = useState(false);

  // * sets or gets the old and newURL urls
  useEffect(() => {
    if (!localStorage.getItem("addresses")) {
      localStorage.setItem("addresses", JSON.stringify(addresses));
    } else {
      setAddresses(JSON.parse(localStorage.getItem("addresses")));
    }
  }, []);

  // * set copied back to false
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 10000);
  }, [copied]);

  // * submit url and validates it
  function submitURL(e, focus = false) {
    e.preventDefault();
    let mapOriginalURLs = addresses.map((v) => v.originalURL);
    if (focus) {
      // * remove the error when the input returns to focus
      setError(false);
    } else if (mapOriginalURLs.includes(inputValue)) {
      //  * gives error if the same url is inputted
      setErrorMessage("please add a new link");
      setError(true);
    } else if (inputValue === "") {
      //  * gives error if the no url is inputted
      setErrorMessage("please add a link");
      setError(true);
    } else {
      setOriAddress(inputValue);
    }
  }
  useEffect(() => {
    // * fetch the newURL url if valid and puts the old and newURL url in an object then in an array.
    if (oriAddress !== "")
      fetch(`https://api.shrtco.de/v2/shorten?url=${oriAddress}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            setAddresses([
              {
                originalURL: oriAddress,
                newURL: data?.result?.short_link3,
                id: data?.result?.code,
              },
              ...addresses,
            ]);
            localStorage.setItem(
              "addresses",
              JSON.stringify([
                {
                  originalURL: oriAddress,
                  newURL: data?.result?.short_link3,
                  id: data?.result?.code,
                },
                ...addresses,
              ])
            );
            setOriAddress("");
            setInputValue("");
          } else {
            setErrorMessage("please add a valid link");
            setError(true);
          }
        });
  }, [oriAddress]);

  return (
    <div className="shortenURL">
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        setOriAddress={setOriAddress}
        error={error}
        setError={setError}
        errorMessage={errorMessage}
        submitURL={submitURL}
      />
      <div className="list">
        {addresses.map(({ originalURL, newURL, id }, i) => (
          <div className="list__item" key={"item" + i}>
            <p className="list__oriAddress">{originalURL}</p>
            <p className="list__newAddress">{newURL}</p>
            <CopyToClipboard text={newURL}>
              <button
                onClick={() => setCopied(id)}
                className={`list__btn ${
                  id === copied ? "list__btn--copied" : ""
                } btn`}
              >
                {id === copied ? <p>Copied!</p> : <p>Copy</p>}
              </button>
            </CopyToClipboard>
          </div>
        ))}
      </div>
    </div>
  );
}
