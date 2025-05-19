// components/CallButton.jsx
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "./CallUs.css"; // Import the CSS file

const CallUs = () => {
    const phoneNumber = "+91 99790 05797";
  return (
    <a href={`tel:${phoneNumber}`} className="call-button-wrapper">
      <div className="call-button-pulse"></div>
      <div className="call-button-icon">
        <FaPhoneAlt color="#022824" />
      </div>
    </a>
  );
};

export default CallUs;
