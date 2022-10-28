import { useState } from "react";
import data from "../data/DeclensionCharts.json";
import Dropdown from "../components/Dropdown";
import DropdownList from "../data/DropdownLists.json";
import Chart from "../components/Chart";
import ChartTitle from "../components/ChartTitle";
import { clearChartValues } from "../Funtions";

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

  const toggleNeuterChart = () => {
    if (neuterChart === "") {
      setNeuterChart("-n");
      setExtraLabel("Neuter");
    } else {
      setNeuterChart("");
      setExtraLabel("");
    }
    clearChartValues();
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
      <Dropdown info={DropdownList["DeclensionFunctions"]} title="Declension Functions" />
      <h2>Declension Chart {chartCount}/{chartAmount} {extraLabel}</h2>
      <div className="Content">
        <button className="Switch-Chart" onClick={() => swtichChart(count, "left")}>{"<"}</button>
        <table className="Chart">
          <ChartTitle data={data["cat-names-1"]}/>
          {data["d-" + chartCount + neuterChart]?.length > 0 ? (
            <>
            {data["d-" + chartCount + neuterChart].map((info) => (
              <Chart info={info} answers={visibleAnswers}/>
            ))}
            </>
          ) : (<></>)}
        </table>
        <button className="Switch-Chart" onClick={() => swtichChart(count, "right")}>{">"}</button>
      </div>
      <div className="Options">
        <NeuterChartBTN />
        <button className="Chart-Option" onClick={() => clearChartValues()}>Clear Answers</button>
        <button className="Chart-Option" onClick={() => toggleAnswers()}>{answerBtnName}</button>
      </div>
    </div>
  );
};

export default Declensions;
