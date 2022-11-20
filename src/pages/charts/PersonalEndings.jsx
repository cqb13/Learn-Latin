import { useState } from "react";
import Chart from "../../components/Chart";
import ChartTitle from "../../components/ChartTitle";
import data from "../../data/PersonalEndingsData.json";
import { clearChartValues } from "../../Funtions";
import Popup from "../../components/Popup";
import useAnswers from "../../components/toggleChartAnswerBtn";

const PersonalEndings = () => {
  const {answerToggle, visibleAnswers} = useAnswers();
  const [meaningChart, setMeaningChart] = useState("");
  const [extraLabel, setExtraLabel] = useState("");

  const toggleMeaningChart = () => {
    if (meaningChart === "") {
      setMeaningChart("-m");
      setExtraLabel("Meaning");
    } else {
      setMeaningChart("");
      setExtraLabel("");
    }
  };

  return (
    <div>
      <div className="Row-Nav-Container">
        <Popup popup={"present-tense"}/>
        <Popup popup={"imperfect-tense"}/>
        <Popup popup={"identify-verb-conjugations"}/>
      </div>
      <header className="Header">
        <h1>Personal Endings</h1>
      </header>
      <hr />
      <h2>Personal Endings Chart {extraLabel}</h2>
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
        {answerToggle}
      </div>
    </div>
  );
};

export default PersonalEndings;
