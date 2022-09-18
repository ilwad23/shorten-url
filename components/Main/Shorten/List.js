import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function List({addresses}) {
  const [copied, setCopied] = useState(false);

  // * set copied back to false
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 10000);
  }, [copied]);

  return (
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
  );
}
