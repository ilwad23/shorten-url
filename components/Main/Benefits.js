import React from 'react'

export default function Benefits() {
  return (
    <div className="benefits">
    <div className="benefit">
      <div className="benefit__top">
        <div className="benefit__circle">
          <img
            src="../images/icon-brand-recognition.svg"
            alt="avatar"
          />
        </div>
      </div>
      <div className="benefit__text">
        <h3 className="benefit__title">Brand Recognition</h3>
        <p className="benefit__para">
          Boost your brand recognition with each click. Generic links
          don’t mean a thing. Branded links help instil confidence in
          your content.
        </p>
      </div>
    </div>
    <div className="benefit">
      <div className="benefit__top">
        <div className="benefit__circle">
          <img src="../images/icon-detailed-records.svg" alt="avatar" />
        </div>
      </div>
      <div className="benefit__text">
        <h3 className="benefit__title">Detailed Records</h3>
        <p className="benefit__para">
          Gain insights into who is clicking your links. Knowing when
          and where people engage with your content helps inform better
          decisions.
        </p>
      </div>
    </div>
    <div className="benefit">
      <div className="benefit__top">
        <div className="benefit__circle">
          <img
            src="../images/icon-fully-customizable.svg"
            alt="avatar"
          />
        </div>
      </div>
      <div className="benefit__text">
        <h3 className="benefit__title">Fully Customizable</h3>
        <p className="benefit__para">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  </div>
  )
}
