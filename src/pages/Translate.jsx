import { useState, useEffect } from "react";
import "../css/pages/Translate.css";

const Translate = () => {
  const [data, setData] = useState("");
  const [displayWord, setDisplayWord] = useState("");
  const [search, setSearch] = useState();
  const [checked, setChecked] = useState(true);
  const [linkChar, setLinkChar] = useState();
  const [source, setSource] = useState("Whitakers Words");

  useEffect(() => {
    setLinkChar("");
  }, []);

  const LTE = (word) => {
    setDisplayWord(word);
    setSearch("");
    fetch("https://learn-latin-server.onrender.com/LTE" + linkChar +"?word=" + word)
      .then((res) => res.text())
      .then((data) => {
        setData(data);
      });
  };

  const ETL = (word) => {
    setDisplayWord(word);
    setSearch("");
    fetch("https://learn-latin-server.onrender.com/ETL" + linkChar +"?word=" + word)
      .then((res) => res.text())
      .then((data) => {
        setData(data);
      });
  };

  const switchMode = () => {
    setChecked(!checked)
    if (checked === true) {
      setLinkChar("-T");
      setSource("Google");
    } else {
      setLinkChar("");
      setSource("Whitakers Words");
    }
  }

  return (
    <div>
      <header>
        <h1 className="Title">Translator</h1>
        <p>translation source: {source}</p>
      </header>
      <hr/>
      <main>
        <div className="Search-Area">
          <input type="text" placeholder="Enter a word" className="Search" value={search || ''} onChange={event => setSearch(event.target.value)}/>
          <button className="Mode-Btn" onClick={() => switchMode()}>Switch Source</button>
        </div>
        <div className="Search-Options">
          <button className="Option" onClick={() => LTE(search)}>Latin to English</button>
          <button className="Option" onClick={() => ETL(search)}>English to Latin</button>
        </div>
        <div className="Results">
          <h2 className="Search-Term">{displayWord}</h2>
          <pre className="Translation-Display">{data}</pre>
        </div>
      </main>
    </div>
  );
};

export default Translate;
