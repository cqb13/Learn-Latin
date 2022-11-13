import { useState } from "react";
import { clearChartValues } from "../Funtions";
import data from "../data/DeclensionData.json";
import Chart from "../components/Chart";
import ChartTitle from "../components/ChartTitle";
import Popup from "../components/Popup";
import useAnswers from "../components/toggleChartAnswerBtn";

const Declensions = () => {
  const [chartCount, setChartCount] = useState(1);
  const [neuterChart, setNeuterChart] = useState("");
  const [extraLabel, setExtraLabel] = useState("");
  const {answerToggle, visibleAnswers} = useAnswers();
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
  };

  const toggleNeuterChart = () => {
    if (neuterChart === "") {
      setNeuterChart("-n");
      setExtraLabel("Neuter");
    } else {
      setNeuterChart("");
      setExtraLabel("");
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
      <div className="Row-Nav-Container">
        <Popup popup={"declension-functions"}/>
      </div>
      <header className="Header">
        <h1>Declensions Endings</h1>
      </header>
      <hr/>
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
        {answerToggle}
      </div>
    </div>
  );
};

export default Declensions;
