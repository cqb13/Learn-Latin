import { useState, useEffect } from "react";
import data from './data/charts.json';
import Row from './ChartRow';
import './css/App.css';

const App = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 650px)").matches
  )
  const [chartCount, setChartCount] = useState();
  const chartAmount = data['chart-count'];
  var count = chartCount;

  useEffect(() => {
    setChartCount(1);
    window
    .matchMedia("(max-width: 650px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

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

  return (
    <div className="App">
      <header className="Header">
        <h1>Learn Latin Declensions</h1>
      </header>
      <h2>Declension Chart {chartCount}/{chartAmount}</h2>
      <div className='Content'>
      <button className='Switch-Chart' onClick={() => swtichChart(count, "left")}>&#11144;</button>
      <table className="Chart">
      <tr>
        <th className="Side-Label">Form</th>
        <th>Singular</th>
        <th>Plural</th>
      </tr>
      <Row count={chartCount} name={"Nominative"} row={1} small={matches}/>
      <Row count={chartCount} name={"Genative"} row={2} small={matches}/>
      <Row count={chartCount} name={"Dative"} row={3} small={matches}/>
      <Row count={chartCount} name={"Accusative"} row={4} small={matches}/>
      <Row count={chartCount} name={"Ablative"} row={5} small={matches}/>
      </table>
      <button className='Switch-Chart' onClick={() => swtichChart(count, "right")}>&#10162;</button>
      </div>
      <div className="Options">
      <button className='Chart-Option' onClick={() => clearValues()}>Redo</button>
      <button className='Chart-Option'>Answers</button>
      </div>
    </div>
  );
}

export default App;
