import { useState } from "react";
import Chart from "../components/Chart";
import Dropdown from "../components/Dropdown";
import DropdownList from "../data/DropdownLists.json";
import data from "../data/PersonalEndingsChart.json";

const PersonalEndings = () => {
  const [answerBtnName, setAnswerBtnName] = useState("Show Answers");
  const [visibleAnswers, setVisibleAnswers] = useState(false);
  const [meaningChart, setMeaningChart] = useState("");
  const [extraLabel, setExtraLabel] = useState("");

  const toggleAnswers = () => {
    if (answerBtnName === "Hide Answers") {
      setAnswerBtnName("Show Answers");
      setVisibleAnswers(false);
    } else {
      setAnswerBtnName("Hide Answers");
      setVisibleAnswers(true);
    }
    clearValues();
  };

  const toggleMeaningChart = () => {
    if (meaningChart === "") {
      setMeaningChart("-m");
      setExtraLabel("Meaning");
    } else {
      setMeaningChart("");
      setExtraLabel("");
    }
    clearValues();
  };

  const clearValues = () => {
    var input = document.getElementsByName("answer");
    for (let i = 0; i < input.length; i++) {
      input[i].className = "Normal";
      input[i].value = "";
    }
  };

  return (
    <div>
      <header className="Header">
        <h1>Learn Latin Personal Endings</h1>
      </header>
      <hr />
      <h2>Personal Endings Chart {extraLabel}</h2>
      <details className="Dropdown">
      <summary>Identify Verb Conjugations</summary>
      {DropdownList["IDVC"]?.length > 0 ? (
        <div className="container">
          {DropdownList["IDVC"].map((IDVC) => (
            <Dropdown info={IDVC} />
          ))}
        </div>
      ) : (<></>)}
      </details>
      <details className="Dropdown">
      <summary>Present Tense</summary>
      {DropdownList["p"]?.length > 0 ? (
        <div className="container">
          {DropdownList["p"].map((p) => (
            <Dropdown info={p} />
          ))}
        </div>
      ) : (<></>)}
      </details>
      <details className="Dropdown">
      <summary>Imperfect Tense</summary>
      {DropdownList["i"]?.length > 0 ? (
        <div className="container">
          {DropdownList["i"].map((i) => (
            <Dropdown info={i} />
          ))}
        </div>
      ) : (<></>)}
      </details>
      <div className="Content">
        <table className="Chart">
          <tr>
            <th>Form</th>
            <th>Singular</th>
            <th>Plural</th>
          </tr>
          {data["p-1" + meaningChart]?.length > 0 ? (
            <>
            {data["p-1"+ meaningChart].map((info) => (
              <Chart count={1} answers={visibleAnswers} info={info}/>
            ))}
            </>
          ) : (
          <></>
          )}
        </table>
      </div>
      <div className="Options">
        <button className="Chart-Option" onClick={() => toggleMeaningChart()}>Meaning Chart</button>
        <button className="Chart-Option" onClick={() => clearValues()}>Clear Answers</button>
        <button className="Chart-Option" onClick={() => toggleAnswers()}>{answerBtnName}</button>
      </div>
    </div>
  );
};

export default PersonalEndings;
