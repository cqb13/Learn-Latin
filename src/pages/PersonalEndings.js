import { useState } from "react";
import AnswerRow from '../components/AnswerChart';
import Row from '../components/ChartRow';
import Dropdown from "../components/Dropdown";
import DropdownList from "../data/DropdownLists.json";

const PersonalEndings = () => {
  const [answerBtnName, setAnswerBtnName] = useState("Show Answers");
  const [visibleAnswers, setVisibleAnswers] = useState(false);
  const [meaningChart, setMeaningChart] = useState(false);
  const [extraLabel, setExtraLabel] = useState("");

  const handleClick = () => {
    if (answerBtnName === "Hide Answers") {
      setAnswerBtnName("Show Answers");
      setVisibleAnswers(false);
    } else {
      setAnswerBtnName("Hide Answers");
      setVisibleAnswers(true);
    }
  }

  const toggleMeaningChart = () => {
    if (meaningChart === false) {
      setMeaningChart(true);
      setExtraLabel("Meaning");
    } else {
      setMeaningChart(false);
      setExtraLabel("");
    }
  }

  return (
    <div>
      <header className="Header">
      <h1>Learn Latin Personal Endings</h1>
      </header>
      <hr/>
      <h2>Personal Endings Chart {extraLabel}</h2>
      <details className="Dropdown"><summary>Identify Verb Conjugations</summary>
      {DropdownList["IDVC"]?.length > 0 ? (
        <div className="container">
          {DropdownList["IDVC"].map((IDVC) => (
            <Dropdown info={IDVC} />
          ))}
        </div>
      ) : (
        <></>
      )}
      </details>
      <details className="Dropdown"><summary>Present Tense</summary>
      {DropdownList["p"]?.length > 0 ? (
        <div className="container">
          {DropdownList["p"].map((p) => (
            <Dropdown info={p} />
          ))}
        </div>
      ) : (
        <></>
      )}
      </details>
      <details className="Dropdown"><summary>Imperfect Tense</summary>
      {DropdownList["i"]?.length > 0 ? (
        <div className="container">
          {DropdownList["i"].map((i) => (
            <Dropdown info={i} />
          ))}
        </div>
      ) : (
        <></>
      )}
      </details>
      <div className='Content'>
      <table className="Chart">
      <tr>
      <th>Form</th>
      <th>Singular</th>
      <th>Plural</th>
      </tr>
      <Row row={1} answers={visibleAnswers} meaning={meaningChart} chart={"p"}/>
      <Row row={2} answers={visibleAnswers} meaning={meaningChart} chart={"p"}/>
      <Row row={3} answers={visibleAnswers} meaning={meaningChart} chart={"p"}/>
      <AnswerRow row={1} answers={visibleAnswers} meaning={meaningChart} chart={"p"}/>
      <AnswerRow row={2} answers={visibleAnswers} meaning={meaningChart} chart={"p"}/>
      <AnswerRow row={3} answers={visibleAnswers} meaning={meaningChart} chart={"p"}/>
      </table>
      </div>
      <div className="Options">
      <button className='Chart-Option' onClick={() => toggleMeaningChart()}>Meaning Chart</button>
      <button className='Chart-Option' onClick={() => clearValues()}>Clear Answers</button>
      <button className='Chart-Option' onClick={() => handleClick()}>{answerBtnName}</button>
      </div>
    </div>
  );
}

const clearValues = () => {
  var loop = 1;
  while (loop < 6) {
    document.getElementById('p-'+ loop +'').className = "Normal";
    document.getElementById('p-'+ loop +'').value = "";
    document.getElementById('s-'+ loop +'').className = "Normal";
    document.getElementById('s-'+ loop +'').value = "";
    loop += 1;
  }
}

export default PersonalEndings;
