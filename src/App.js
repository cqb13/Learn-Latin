import React from "react";
import "./css/Global.css";
import './css/Declensions.css';
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages"
import Declensions from "./pages/Declensions";
import Resources from "./pages/Resources";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Declensions" element={<Declensions />} />
        <Route path="/Resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;