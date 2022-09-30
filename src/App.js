import { useState, useEffect } from "react";
import data from './data/charts.json';
import './css/App.css';

function clearValues() {
  var loop = 1;
  while (loop < 6) {
    document.getElementById('p-'+ loop +'').className = "Normal";
    document.getElementById('p-'+ loop +'').value = "";
    document.getElementById('s-'+ loop +'').className = "Normal";
    document.getElementById('s-'+ loop +'').value = "";
    loop += 1;
  }
}

function App() {
  const [chartCount, setChartCount] = useState();

  useEffect(() => {
    setChartCount(1);
  }, []);

  var count = chartCount

  return (
    <div className="App">
      <header className="Header">
        <h1>Learn Latin Declensions</h1>
      </header>
      <h2>Declension Chart {chartCount}/3</h2>
      <div className='Content'>
      <button className='Switch-Chart' onClick={() => {if (count == 1) {setChartCount(3);} else {setChartCount(count -= 1);}clearValues();}}>&#11144;</button>
        <Chart count={chartCount}/>
      <button className='Switch-Chart' onClick={() => {if (count == 3) {setChartCount(1);} else {setChartCount(count += 1);}clearValues();}}>&#10162;</button>
      </div>
      <div className="Options">
      <button className='Chart-Option' onClick={() => clearValues()}>Redo</button>
      <button className='Chart-Option'>Answers</button>
      </div>
    </div>
  );
}

//TODO: when time make this good
// making this day before test to study, no time to write good code.
// good luck future me
function Chart(count) {

  const handleChange = event => {
    var id = event.target.id;
    var value = event.target.value;
    if (value == "") {
      event.target.className = "Normal";
    } else if (id == "s-1" && value == data['d-'+ count.count +''].Nominative[0]){
      event.target.className = "Right";
    } else if (id == "s-2" && value == data['d-'+ count.count +''].Genative[0]) {
      event.target.className = "Right";
    } else if (id == "s-3" && value == data['d-'+ count.count +''].Dative[0]) {
      event.target.className = "Right";
    } else if (id == "s-4" && value == data['d-'+ count.count +''].Accusative[0]) {
      event.target.className = "Right";
    } else if (id == "s-5" && value == data['d-'+ count.count +''].Ablative[0]) {
      event.target.className = "Right";
    } else if (id == "p-1" && value == data['d-'+ count.count +''].Nominative[1]){
      event.target.className = "Right";
    } else if (id == "p-2" && value == data['d-'+ count.count +''].Genative[1]) {
      event.target.className = "Right";
    } else if (id == "p-3" && value == data['d-'+ count.count +''].Dative[1]) {
      event.target.className = "Right";
    } else if (id == "p-4" && value == data['d-'+ count.count +''].Accusative[1]) {
      event.target.className = "Right";
    } else if (id == "p-5" && value == data['d-'+ count.count +''].Ablative[1]) {
      event.target.className = "Right";
    } else {
      event.target.className = "Wrong";
    }
  };

  return (
    <table id="Chart">
  <tr>
    <th>Form</th>
    <th>Singular</th>
    <th>Plural</th>
  </tr>
  <tr>
    <td>Nominative</td>
    <td>
      <input type="text" placeholder='Enter Declension' id="s-1" onChange={handleChange} className="Normal"/>
    </td>
        <td>
      <input type="text" placeholder='Enter Declension' id="p-1" onChange={handleChange} className="Normal"/>
    </td>
  </tr>
  <tr>
    <td>Genitive</td>
    <td>
      <input type="text" placeholder='Enter Declension' id="s-2" onChange={handleChange} className="Normal"/>
    </td>
        <td>
      <input type="text" placeholder='Enter Declension' id="p-2" onChange={handleChange} className="Normal"/>
    </td>
  </tr>
  <tr>
    <td>Dative</td>
    <td>
      <input type="text" placeholder='Enter Declension' id="s-3" onChange={handleChange} className="Normal"/>
    </td>
        <td>
      <input type="text" placeholder='Enter Declension' id="p-3" onChange={handleChange} className="Normal"/>
    </td>
  </tr>
  <tr>
    <td>Accusative</td>
    <td>
      <input type="text" placeholder='Enter Declension' id="s-4" onChange={handleChange} className="Normal"/>
    </td>
        <td>
      <input type="text" placeholder='Enter Declension' id="p-4" onChange={handleChange} className="Normal"/>
    </td>
  </tr>
  <tr>
    <td>Ablative</td>
    <td>
      <input type="text" placeholder='Enter Declension' id="s-5" onChange={handleChange} className="Normal"/>
    </td>
        <td>
      <input type="text" placeholder='Enter Declension' id="p-5" onChange={handleChange} className="Normal"/>
    </td>
  </tr>
</table>
  )
}

export default App;
