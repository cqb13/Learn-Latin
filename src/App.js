import { useState, useEffect } from "react";
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
        <Chart count={chartCount}/>
      </div>
      <h2 className='Button' onClick={() => {
        if (count == 3) {
          setChartCount(1);
        } else {
          setChartCount(count += 1);
        }
        clearValues();
      }}>Next Chart</h2>
      <h2 className='Button' onClick={() => {
        setChartCount(1);
        clearValues();
      }}>Start Again</h2>
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
    if (count.count == 1) {
      if (id == "s-1" && value == "a" || id == "s-5" && value == "a") {
        event.target.className = "Right";
      }else if (id == "s-2" && value == 'ae' || id == "s-3" && value == 'ae' || id == "p-1" && value == "ae") {
        event.target.className = "Right";
      }else if (id == "s-4" && value == "am") {
        event.target.className = "Right";
      } else if (id == "p-2" && value == "arum") {
        event.target.className = "Right";
      } else if (id == "p-3" && value == 'is' || id == "p-5" && value == "is") {
        event.target.className = "Right";
      } else if (id == "p-4" && value == "as") {
        event.target.className = "Right";
      } else {
        event.target.className = "Wrong";
      }
    } else if (count.count == 2) {
      if (id == 's-1' && value == 'us') {
        event.target.className = "Right";
      } else if (id == 's-2' && value == 'i' || id == 'p-1' && value == 'i') {
        event.target.className = "Right";
      } else if (id == 's-3' && value == 'o' || id == 's-5' && value == 'o') {
        event.target.className = "Right";
      } else if (id == 's-4' && value == 'um') {
        event.target.className = "Right";
      } else if (id == 'p-2' && value == 'orum') {
        event.target.className = "Right";
      } else if (id == 'p-3' && value == 'is' || id == 'p-5' && value == 'is') {
        event.target.className = "Right";
      } else if (id == 'p-4' && value == 'os') {
        event.target.className = "Right";
      } else {
        event.target.className = "Wrong";
      }
    } else if (count.count == 3) {
      if (id == 's-1' && value == 'r, x, s, o, n, l') {
        event.target.className = "Right";
      } else if (id == 's-2' && value == 'is') {
        event.target.className = "Right";
      } else if (id == 's-3' && value == 'i') {
        event.target.className = "Right";
      } else if (id == 's-4' && value == 'em') {
        event.target.className = "Right";
      } else if (id == 's-5' && value == 'e') {
        event.target.className = "Right";
      } else if (id == 'p-1' && value == 'es' || id == 'p-4' && value == 'es') {
        event.target.className = "Right";
      } else if (id == 'p-2' && value == 'um') {
        event.target.className = "Right";
      } else if (id == 'p-3' && value == 'ibus' || id == 'p-5' && value == 'ibus') {
        event.target.className = "Right";
      } else {
        event.target.className = "Wrong";
      }
    }

    if (value == "") {
      event.target.className = "Normal";
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
