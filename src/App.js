import { useState, useEffect } from "react";
import Row from './ChartRow';
import './css/App.css';

const App = () => {
  const [chartCount, setChartCount] = useState();
  var count = chartCount

  useEffect(() => {
    setChartCount(1);
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

  return (
    <div className="App">
      <header className="Header">
        <h1>Learn Latin Declensions</h1>
      </header>
      <h2>Declension Chart {chartCount}/3</h2>
      <div className='Content'>
      <button className='Switch-Chart' onClick={() => {if (count === 1) {setChartCount(3);} else {setChartCount(count -= 1);}clearValues();}}>&#11144;</button>
      <table id="Chart">
      <tr>
        <th>Form</th>
        <th>Singular</th>
        <th>Plural</th>
      </tr>
      <Row count={chartCount} name={"Nominative"} row={1}/>
      <Row count={chartCount} name={"Genative"} row={2}/>
      <Row count={chartCount} name={"Dative"} row={3}/>
      <Row count={chartCount} name={"Accusative"} row={4}/>
      <Row count={chartCount} name={"Ablative"} row={5}/>
      </table>
      <button className='Switch-Chart' onClick={() => {if (count === 3) {setChartCount(1);} else {setChartCount(count += 1);}clearValues();}}>&#10162;</button>
      </div>
      <div className="Options">
      <button className='Chart-Option' onClick={() => clearValues()}>Redo</button>
      <button className='Chart-Option'>Answers</button>
      </div>
    </div>
  );
}

export default App;
