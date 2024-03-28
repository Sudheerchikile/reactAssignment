import React from "react";
import "./index.css";

const Coin = ({ currency, details }) => {
  return (
    <div className="coin-card">
      <div className="coin-header">
        <h2 className="name">{details.description}-{details.code}</h2>
        
      </div>
      <div className="button-prices-con">
      <div className="coin-details">
        <p className="coin-rate">
          
          Rate:{details.rate}
        </p>
        <p className="coin-rate-float">
          Rate Float: {details.rate_float.toFixed(2)}
        </p>
      </div>
      <button className="batton">Trade</button>
      </div>
     
    </div>
  );
};

export default Coin;
