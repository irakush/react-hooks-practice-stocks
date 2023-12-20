import React from "react";
import Stock from "./Stock";

function StockContainer({ stocksArray }) {
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      { stocksArray.map(stock => <Stock stock={stock} />) }
    </div>
  );
}

export default StockContainer;
