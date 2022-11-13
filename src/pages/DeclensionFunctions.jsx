import data from "../data/DeclensionData.json";
import Chart from "../components/Chart";
import ChartTitle from "../components/ChartTitle";
import { clearChartValues } from "../Funtions";
import Popup from "../components/Popup";
import useAnswers from "../components/toggleChartAnswerBtn";

const DeclensionFunctions = () => {
  const {answerToggle, visibleAnswers} = useAnswers();
  
  return (
    <div>
      <div className="Row-Nav-Container">
        <Popup popup={"declension-functions"}/>
      </div>
      <header className="Header">
        <h1>Declensions Funtions</h1>
      </header>
      <hr/>
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
        {answerToggle}
      </div>
    </div>
  );
};

export default DeclensionFunctions;
