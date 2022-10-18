import React from "react";
import "./css/Global.css";
import "./css/Charts.css";
import "./css/Translate.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Charts from "./pages/Charts";
import Translate from "./pages/Translate";
import Resources from "./pages/Resources";
import Declensions from "./pages/Declensions";
import FutureTense from "./pages/FutureTense";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Charts" element={<Charts />} />
        <Route path="/Translate" element={<Translate />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Charts/Declensions" element={<Declensions />} />
        <Route path="/Charts/Future-Tense" element={<FutureTense />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
