import { useState } from "react";
import { clearChartValues, endings } from "../Funtions";
import data from "../data/PersonalPronounsData.json";
import Chart from "../components/Chart";
import ChartTitle from "../components/ChartTitle";
import Popup from "../components/Popup";

const PersonalPronouns = () => {
  const [chartCount, setChartCount] = useState(1);
  const [answerBtnName, setAnswerBtnName] = useState("Show Answers");
  const [visibleAnswers, setVisibleAnswers] = useState(false);
  const [catName, setCatName] = useState("cat-names-1");
  const [type, setType] = useState("");
  const [meaningChart, setMeaningChart] = useState("");
  const [extraLabel, setExtraLabel] = useState("");
  const [otherExtraLabel, setOtherExtraLabel] = useState("");
  const chartAmount = data["chart-count"];
  var count = chartCount;
  var btn;

  const swtichChart = (count, move) => {
    if (move === "right") {
      setChartCount((count += 1));
      if (chartCount === chartAmount) {
        setChartCount(1);
      }
    } else if (move === "left") {
      setChartCount((count -= 1));
      if (chartCount === 1) {
        setChartCount(chartAmount);
      }
    }

    //for 3rd person chart
    if (count === 3) {
      setCatName("cat-names-2");
      setExtraLabel("Singular");
      setType("-s");
    } else {
      setCatName("cat-names-1");
      setExtraLabel("");
      setType("");
    }
    clearChartValues();
  };

  const toggleAnswers = () => {
    if (answerBtnName === "Hide Answers") {
      setAnswerBtnName("Show Answers");
      setVisibleAnswers(false);
    } else {
      setAnswerBtnName("Hide Answers");
      setVisibleAnswers(true);
    }
  };

  const switchType = () => {
    if (type === "-s") {
      setType("-p");
      setExtraLabel("Plural");
    } else {
      setType("-s");
      setExtraLabel("Singular");
    }
    clearChartValues();
  };

  const toggleMeaningChart = () => {
    if (meaningChart === "") {
      setMeaningChart("-m");
      setOtherExtraLabel("Meanings");
    } else {
      setMeaningChart("");
      setOtherExtraLabel("");
    }
    clearChartValues();
  };

  const PluralChartBTN = () => {
    if (chartCount === 3) {
      btn = (
        <button className="Chart-Option" onClick={() => switchType()}>Switch Type</button>
      );
    } else {
      btn = "";
    }
    return <>{btn}</>;
  };

  return (
    <div>
      <div className="Row-Nav-Container">
        <Popup popup={"declension-functions"}/>
      </div>
      <header className="Header">
        <h1>Personal Pronouns</h1>
      </header>
      <hr/>
      <h2>{endings[chartCount]} Person {extraLabel} {otherExtraLabel}</h2>
      <div className="Content">
        <button className="Switch-Chart" onClick={() => swtichChart(count, "left")}>{"<"}</button>
        <table className="Chart">
          <ChartTitle data={data[catName]}/>
          {data["pp-" + chartCount + type + meaningChart]?.length > 0 ? (
            <>
            {data["pp-" + chartCount + type + meaningChart].map((info) => (
              <Chart info={info} answers={visibleAnswers}/>
            ))}
            </>
          ) : (<></>)}
        </table>
        <button className="Switch-Chart" onClick={() => swtichChart(count, "right")}>{">"}</button>
      </div>
      <div className="Options">
        <PluralChartBTN/>
        <button className="Chart-Option" onClick={() => toggleMeaningChart()}>Toggle Meanings</button>
        <button className="Chart-Option" onClick={() => clearChartValues()}>Clear Answers</button>
        <button className="Chart-Option" onClick={() => toggleAnswers()}>{answerBtnName}</button>
      </div>
    </div>
  );
};

export default PersonalPronouns;
