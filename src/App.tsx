import React, { useState } from "react";
import ProductList from "./components/ProductList";

const App: React.FC = () => {
  return (
    <div className="App">
      <center>
        <h1>Search App</h1>
      </center>
      <ProductList />
    </div>
  );
};

export default App;
