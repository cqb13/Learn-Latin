import { useState } from "react";
import data from '../data/FutureTenseChart.json';
import AnswerRow from '../components/AnswerChart';
import Row from '../components/ChartRow';
import VerbConjugations from '../components/VerbConjugations';

const FutureTense = () => {
  const [chartCount, setChartCount] = useState(1);
  const [answerBtnName, setAnswerBtnName] = useState("Show Answers");
  const [visibleAnswers, setVisibleAnswers] = useState(false);
  const chartAmount = data['chart-count'];
  var count = chartCount;

  const swtichChart = (count, move) => {
    if (move === "right") {
      setChartCount(count += 1);
      if (chartCount === chartAmount) {
        setChartCount(1);
      }
    } else if (move === "left"){
      setChartCount(count -= 1);
      if (chartCount === 1) {
        setChartCount(chartAmount);
      }
    }
    clearValues();
  }

  const handleClick = () => {
    if (answerBtnName === "Hide Answers") {
      setAnswerBtnName("Show Answers");
      setVisibleAnswers(false);
    } else {
      setAnswerBtnName("Hide Answers");
      setVisibleAnswers(true);
    }
  }

  return (
    <div>
      <header className="Header">
      <h1>Learn Latin Future Tense</h1>
      </header>
      <hr/>
      <h2>Future Tense Chart {chartCount}/{chartAmount}</h2>
      <VerbConjugations/>
      <h3>{data["action-"+ chartCount]}</h3>
      <div className='Content'>
      <button className='Switch-Chart' onClick={() => swtichChart(count, "left")}>{'<'}</button>
      <table className="Chart">
      <tr>
      <th>Form</th>
      <th>Singular</th>
      <th>Plural</th>
      </tr>
      <Row count={chartCount} row={1} answers={visibleAnswers} chart={"f"}/>
      <Row count={chartCount} row={2} answers={visibleAnswers} chart={"f"}/>
      <Row count={chartCount} row={3} answers={visibleAnswers} chart={"f"}/>
      <AnswerRow count={chartCount} row={1} answers={visibleAnswers} chart={"f"}/>
      <AnswerRow count={chartCount} row={2} answers={visibleAnswers} chart={"f"}/>
      <AnswerRow count={chartCount} row={3} answers={visibleAnswers} chart={"f"}/>
      </table>
      <button className='Switch-Chart' onClick={() => swtichChart(count, "right")}>{'>'}</button>
      </div>
      <div className="Options">
      <button className='Chart-Option' onClick={() => clearValues()}>Clear Answers</button>
      <button className='Chart-Option' onClick={() => handleClick()}>{answerBtnName}</button>
      </div>
    </div>
  );
}

const clearValues = () => {
  var loop = 1;
  while (loop < 6) {
    document.getElementById('p-'+ loop +'').className = "Normal";
    document.getElementById('p-'+ loop +'').value = "";
    document.getElementById('s-'+ loop +'').className = "Normal";
    document.getElementById('s-'+ loop +'').value = "";
    loop += 1;
  }
}

export default FutureTense;
