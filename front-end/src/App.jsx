import React from "react";
import { SiTheweatherchannel } from "react-icons/si";
import SearchBar from "./components/searchbar";
import "./App.css";


const App = () => {
  return (
    <div className="app">
      <h1> <SiTheweatherchannel /> Weather App</h1>
      <SearchBar />
    </div>
  );
}

export default App;
