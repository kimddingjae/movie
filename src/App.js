import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
