import React from "react";
import "./App.css";
import About from "./components/about/about";
import Home from "./components/home/home";
import Practise from "./components/practise";

function App() {
  return (
    <div className="main">
      <Home />
      <About />
      <Practise />
    </div>
  );
}

export default App;
