import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/Global.css";
import Home from "./pages";
import Chat from "./pages/Chat";
import Practice from "./pages/Practice";
import Translate from "./pages/Translate";
import Resources from "./pages/Resources";
import Declensions from "./pages/charts/Declensions";
import FutureTense from "./pages/charts/FutureTense"
import PersonalEndings from "./pages/charts/PersonalEndings";
import PersonalPronouns from "./pages/charts/PersonalPronouns";
import DeclensionFunctions from "./pages/charts/DeclensionFunctions";
import SentenceTranslation from "./pages/practice/SentenceTranslation";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="Switch-Page">Home</Link>
        <Link to="/practice" className="Switch-Page">Practice</Link>
        <Link to="/translate" className="Switch-Page">Translate</Link>
        <Link to="/chat" className="Switch-Page">Chat</Link>
        <Link to="/resources" className="Switch-Page">Resources</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Practice" element={<Practice />} />
        <Route path="/Translate" element={<Translate />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Practice/Declensions" element={<Declensions />} />
        <Route path="/Practice/Future-Tense" element={<FutureTense />} />
        <Route path="/Practice/Personal-Endings" element={<PersonalEndings />} />
        <Route path="/Practice/Personal-Pronouns" element={<PersonalPronouns />} />
        <Route path="/Practice/Declension-Funtions" element={<DeclensionFunctions />} />
        <Route path="/Practice/Sentence-Translation" element={<SentenceTranslation />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
