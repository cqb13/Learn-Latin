import { useState } from "react";
import Chart from "../components/Chart";
import Dropdown from "../components/Dropdown";
import DropdownList from "../data/DropdownLists.json";
import ChartTitle from "../components/ChartTitle";
import data from "../data/PersonalEndingsChart.json";
import { clearChartValues } from "../Funtions";

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
    clearChartValues();
  };

  const toggleMeaningChart = () => {
    if (meaningChart === "") {
      setMeaningChart("-m");
      setExtraLabel("Meaning");
    } else {
      setMeaningChart("");
      setExtraLabel("");
    }
    clearChartValues();
  };

  return (
    <div>
      <header className="Header">
        <h1>Learn Latin Personal Endings</h1>
      </header>
      <hr />
      <h2>Personal Endings Chart {extraLabel}</h2>
      <Dropdown info={DropdownList["IDVC"]} title="Identify Verb Conjugations" />
      <Dropdown info={DropdownList["p"]} title="Present Tense" />
      <Dropdown info={DropdownList["i"]} title="Imperfect Tense" />
      <div className="Content">
        <table className="Chart">
          <ChartTitle data={data["cat-names-1"]}/>
          {data["p-1" + meaningChart]?.length > 0 ? (
            <>
            {data["p-1"+ meaningChart].map((info) => (
              <Chart info={info} answers={visibleAnswers}/>
            ))}
            </>
          ) : (<></>)}
        </table>
      </div>
      <div className="Options">
        <button className="Chart-Option" onClick={() => toggleMeaningChart()}>Meaning Chart</button>
        <button className="Chart-Option" onClick={() => clearChartValues()}>Clear Answers</button>
        <button className="Chart-Option" onClick={() => toggleAnswers()}>{answerBtnName}</button>
      </div>
    </div>
  );
};

export default PersonalEndings;
