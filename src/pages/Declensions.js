import { useState } from "react";
import data from "../data/DeclensionCharts.json";
import Chart from "../components/Chart";

const Declensions = () => {
  const [chartCount, setChartCount] = useState(1);
  const [answerBtnName, setAnswerBtnName] = useState("Show Answers");
  const [visibleAnswers, setVisibleAnswers] = useState(false);
  const [neuterChart, setNeuterChart] = useState("");
  const [extraLabel, setExtraLabel] = useState("");
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
    setNeuterChart("");
    setExtraLabel("");
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

  const toggleNeuterChart = () => {
    if (neuterChart === "") {
      setNeuterChart("-n");
      setExtraLabel("Neuter");
    } else {
      setNeuterChart("");
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

  const NeuterChartBTN = () => {
    if (chartCount === 3 || chartCount === 4) {
      btn = (
        <button className="Chart-Option" onClick={() => toggleNeuterChart()}>Neuter Chart</button>
      );
    } else {
      btn = "";
    }
    return <>{btn}</>;
  };

  return (
    <div>
      <header className="Header">
        <h1>Learn Latin Declensions</h1>
      </header>
      <hr/>
      <h2>Declension Chart {chartCount}/{chartAmount} {extraLabel}</h2>
      <div className="Content">
        <button className="Switch-Chart" onClick={() => swtichChart(count, "left")}>{"<"}</button>
        <table className="Chart">
          <tr>
            <th>Form</th>
            <th>Singular</th>
            <th>Plural</th>
          </tr>
          {data["d-" + chartCount + neuterChart]?.length > 0 ? (
            <>
            {data["d-" + chartCount + neuterChart].map((info) => (
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
        <NeuterChartBTN />
        <button className="Chart-Option" onClick={() => clearValues()}>Clear Answers</button>
        <button className="Chart-Option" onClick={() => toggleAnswers()}>{answerBtnName}</button>
      </div>
    </div>
  );
};

export default Declensions;
