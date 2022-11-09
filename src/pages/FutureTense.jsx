import { useState } from "react";
import data from "../data/FutureTenseData.json";
import Chart from "../components/Chart";
import ChartTitle from "../components/ChartTitle";
import { clearChartValues } from "../Funtions";
import Popup from "../components/Popup";

const FutureTense = () => {
  const [chartCount, setChartCount] = useState(1);
  const [answerBtnName, setAnswerBtnName] = useState("Show Answers");
  const [visibleAnswers, setVisibleAnswers] = useState(false);
  const chartAmount = data["chart-count"];
  var count = chartCount;

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
    clearChartValues();
  };

  return (
    <div>
      <div className="Row-Nav-Container">
        <Popup popup={"present-tense"}/>
        <Popup popup={"imperfect-tense"}/>
        <Popup popup={"identify-verb-conjugations"}/>
      </div>
      <header className="Header">
        <h1>Future Tense</h1>
      </header>
      <hr/>
      <h2>Future Tense Chart {chartCount}/{chartAmount}</h2>
      <h3>{data["action-" + chartCount]}</h3>
      <div className="Content">
        <button className="Switch-Chart" onClick={() => swtichChart(count, "left")}>{"<"}</button>
        <table className="Chart">
          <ChartTitle data={data["cat-names-1"]}/>
          {data["f-" + chartCount]?.length > 0 ? (
            <>
            {data["f-" + chartCount].map((info) => (
              <Chart info={info} answers={visibleAnswers}/>
            ))}
            </>
          ) : (<></>)}
        </table>
        <button className="Switch-Chart" onClick={() => swtichChart(count, "right")}>{">"}</button>
      </div>
      <div className="Options">
        <button className="Chart-Option" onClick={() => clearChartValues()}>Clear Answers</button>
        <button className="Chart-Option" onClick={() => toggleAnswers()}>{answerBtnName}</button>
      </div>
    </div>
  );
};

export default FutureTense;