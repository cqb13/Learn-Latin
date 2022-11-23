import { useState, useEffect } from "react";
import data from "../../data/TranslationPractice.json";
import VocabDisplay from "../../components/practice/VocabDisplay";

const SentenceTranslation = () => {
  const [visibility, setVisibility] = useState("Hidden");
  const [sentence, setSentence] = useState("");
  const [answer, setAnswer] = useState("");
  const [vocab, setVocab] = useState([]);
  const [index, setIndex] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    setIndex(Math.floor(Math.random() * data.length));
  }, []);

  const generateSentence = () => {
    setIndex(Math.floor(Math.random() * data.length));
    setSentence(data[index].latin);
    setAnswer(data[index].english);
    setVocab(data[index].vocab);
    setValue("");
  };

  const checkKey = (e) => {
    if (e.key === "Enter") {
      setupAnswer();
    }
  };

  const toggleVocab = () => {
    if (visibility === "Hidden") {
      setVisibility("Visible");
    } else {
      setVisibility("Hidden");
    }
  };

  const setupAnswer = () => {
    setVisibility("Visible");
    setValue("");
  };

  return (
    <div>
      <header>
        <h1 className="Title">Sentence Translation</h1>
      </header>
      <hr/>
      <main>
        <div className="Setup-Container">
          <h2>{sentence}</h2>
          <div className="Translation-Options">
            <button className="Translation-Option" onClick={generateSentence}>Generate</button>
            <button className="Translation-Option">Skip</button>
            <button className="Translation-Option" onClick={toggleVocab}>Vocab</button>
          </div>
          <div className={visibility}>
            <h2>Vocab</h2>
            <hr />
            <VocabDisplay vocab={vocab} />
          </div>
        </div>

        <div className="Input-Container">
          <input type="text" placeholder="Enter the translation" className="Search" value={value || ''} onChange={event => setValue(event.target.value)} onKeyDown={checkKey}/>
          <button className="Translation-Option" onClick={setupAnswer}>Submit</button>
        </div>
        <hr />      
        <div className="Answer-Container">
          <h2>{sentence}</h2>
          <h2>ANS: {answer}</h2>
          <h2>YOU: {value}</h2>
        </div>
      </main>
    </div>
  );
};

export default SentenceTranslation;
