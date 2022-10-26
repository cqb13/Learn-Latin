import { useState } from "react";
import data from "../data/FutureTenseChart.json";
import Chart from "../components/Chart";
import Dropdown from "../components/Dropdown";
import DropdownList from "../data/DropdownLists.json";

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
    clearValues();
  };

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
        <h1>Learn Latin Future Tense</h1>
      </header>
      <hr/>
      <h2>Future Tense Chart {chartCount}/{chartAmount}</h2>
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
      <h3>{data["action-" + chartCount]}</h3>
      <div className="Content">
        <button className="Switch-Chart" onClick={() => swtichChart(count, "left")}>{"<"}</button>
        <table className="Chart">
          <tr>
            <th>Form</th>
            <th>Singular</th>
            <th>Plural</th>
          </tr>
          {data["f-" + chartCount]?.length > 0 ? (
            <>
            {data["f-" + chartCount].map((info) => (
              <Chart count={chartCount} answers={visibleAnswers} info={info}/>
            ))}
            </>
          ) : (
          <></>
          )}
        </table>
        <button className="Switch-Chart" onClick={() => swtichChart(count, "right")}>{">"}</button>
      </div>
      <div className="Options">
        <button className="Chart-Option" onClick={() => clearValues()}>Clear Answers</button>
        <button className="Chart-Option" onClick={() => toggleAnswers()}>{answerBtnName}</button>
      </div>
    </div>
  );
};

export default FutureTense;
