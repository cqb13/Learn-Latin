import React from "react";
import "./css/Global.css";
import "./css/Charts.css";
import "./css/Translate.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Practice from "./pages/Practice";
import Translate from "./pages/Translate";
import Resources from "./pages/Resources";
import Declensions from "./pages/Declensions";
import FutureTense from "./pages/FutureTense";
import PersonalEndings from "./pages/PersonalEndings";
import PersonalPronouns from "./pages/PersonalPronouns";
import DeclensionFunctions from "./pages/DeclensionFunctions";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Practice" element={<Practice />} />
        <Route path="/Translate" element={<Translate />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Practice/Declensions" element={<Declensions />} />
        <Route path="/Practice/Future-Tense" element={<FutureTense />} />
        <Route path="/Practice/Personal-Endings" element={<PersonalEndings />} />
        <Route path="/Practice/Personal-Pronouns" element={<PersonalPronouns />} />
        <Route path="/Practice/Declension-Funtions" element={<DeclensionFunctions />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
