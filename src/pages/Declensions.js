import { useState } from "react";
import data from '../data/charts.json';
import AnswerRow from '../components/AnswerChart';
import Row from '../components/ChartRow'

const Declensions = () => {
  const [chartCount, setChartCount] = useState(1);
  const [answerBtnName, setAnswerBtnName] = useState("Show Answers");
  const [visibleAnswers, setVisibleAnswers] = useState(false);
  const chartAmount = data['chart-count'];
  var count = chartCount;

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

  const swtichChart = (count, move) => {
    if (move === "right") {
      setChartCount(count += 1);
      if (chartCount === chartAmount) {
        setChartCount(1);
      }
    } else if (move === "left"){
      setChartCount(count -= 1);
      if (chartCount === 1) {
        setChartCount(3);
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
      <h1>Learn Latin Declensions</h1>
      </header>
      <hr/>
      <h2>Declension Chart {chartCount}/{chartAmount}</h2>
      <div className='Content'>
      <button className='Switch-Chart' onClick={() => swtichChart(count, "left")}>{'<'}</button>
      <table className="Chart">
      <tr>
      <th className="Side-Label">Form</th>
      <th>Singular</th>
      <th>Plural</th>
      </tr>
      <Row count={chartCount} row={1} answers={visibleAnswers}/>
      <Row count={chartCount} row={2} answers={visibleAnswers}/>
      <Row count={chartCount} row={3} answers={visibleAnswers}/>
      <Row count={chartCount} row={4} answers={visibleAnswers}/>
      <Row count={chartCount} row={5} answers={visibleAnswers}/>
      <AnswerRow count={chartCount} row={1} answers={visibleAnswers}/>
      <AnswerRow count={chartCount} row={2} answers={visibleAnswers}/>
      <AnswerRow count={chartCount} row={3} answers={visibleAnswers}/>
      <AnswerRow count={chartCount} row={4} answers={visibleAnswers}/>
      <AnswerRow count={chartCount} row={5} answers={visibleAnswers}/>
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

export default Declensions;