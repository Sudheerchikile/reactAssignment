import "./index.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "../Coin";

function CryptoComponent() {
  const [coinData, setCoinData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        if (response.data && response.data.bpi) {
          setCoinData(response.data.bpi);
        } else {
          setError("Invalid API response format.");
        }
      })
      .catch((error) => {
        setError("Error fetching data: " + error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!coinData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Appp">
     <h1 className="heading">Task3-Fetch cryptocurrency Prices</h1>
     <p className="bitcoin">Bitcoin Prices</p>
      <div className="cryptoDisplay">
        {Object.keys(coinData).map((currency) => (
          <Coin key={currency} details={coinData[currency]} />
        ))}
      </div>
    </div>
  );
}

export default CryptoComponent;
