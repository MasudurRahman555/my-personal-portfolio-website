import React from "react";
import "./App.css";
import About from "./components/about/about";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";
import Resume from "./components/resume/resume";
import Services from "./components/services/services";
function App() {
  return (
    <div className="main">
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
    </div>
  );
}

export default App;
