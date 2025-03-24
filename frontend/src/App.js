import React, { useEffect, useState } from "react";
import axios from "axios";
import BeerList from "./components/BeerList";

function App() {
  return (
      <div>
          <h1>Welkom bij We Like Bier!</h1>
          <BeerList />
      </div>
  );
}

export default App;
