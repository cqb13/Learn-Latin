import { useState } from "react";
import data from "../data/DeclensionCharts.json";
import Dropdown from "../components/Dropdown";
import DropdownList from "../data/DropdownLists.json";
import Chart from "../components/Chart";
import ChartTitle from "../components/ChartTitle";
import { clearChartValues } from "../Funtions";

const DeclensionFunctions = () => {
  const [answerBtnName, setAnswerBtnName] = useState("Show Answers");
  const [visibleAnswers, setVisibleAnswers] = useState(false);

  const toggleAnswers = () => {
    if (answerBtnName === "Hide Answers") {
      setAnswerBtnName("Show Answers");
      setVisibleAnswers(false);
    } else {
      setAnswerBtnName("Hide Answers");
      setVisibleAnswers(true);
    }
  };
  
  return (
    <div>
      <header className="Header">
        <h1>Learn Latin Declensions</h1>
      </header>
      <hr/>
      <Dropdown info={DropdownList["DeclensionFunctions"]} title="Declension Functions" />
      <h2>Declension Funtions</h2>
      <div className="Content">
        <table className="Chart">
          <ChartTitle data={data["cat-names-2"]}/>
          {data["Functions"]?.length > 0 ? (
            <>
            {data["Functions"].map((info) => (
              <Chart answers={visibleAnswers} info={info}/>
            ))}
            </>
          ) : (<></>)}
        </table>
      </div>
      <div className="Options">
        <button className="Chart-Option" onClick={() => clearChartValues()}>Clear Answers</button>
        <button className="Chart-Option" onClick={() => toggleAnswers()}>{answerBtnName}</button>
      </div>
    </div>
  );
};

export default DeclensionFunctions;
