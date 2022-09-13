import React, {useState} from "react";
import Form from "./form";
export default function Shorten() {
  const [oriAddress, setOriAddress] = useState('https://www.frontendmentor.io')
  const [newAddress, setNewAddress] = useState('https://rel.ink/k4lKyk')
  const [addresses, setAddresses] = useState([{addresses:{origin:oriAddress, new:newAddress}}])
 console.log(oriAddress);
  return (
    <div className="shortenURL">
      <Form oriAddress={oriAddress} setOriAddress={setOriAddress}/>
      <div className="list">
        {addresses.map(({addresses},i) => (
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
