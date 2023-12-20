import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const URL = "http://localhost:3001/stocks"

  const [stocksArray, setStocksArray] = useState([])

  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(setStocksArray) // .then(data => setStocksArray(data))
  }, [])

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocksArray={stocksArray} />
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
