import { useState } from "react";
import data from "../data/FutureTenseChart.json";
import Chart from "../components/Chart";
import Dropdown from "../components/Dropdown";
import ChartTitle from "../components/ChartTitle";
import DropdownList from "../data/DropdownLists.json";
import { clearChartValues } from "../Funtions";

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
      <header className="Header">
        <h1>Learn Latin Future Tense</h1>
      </header>
      <hr/>
      <Dropdown info={DropdownList["IDVC"]} title="Identify Verb Conjugations" />
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
