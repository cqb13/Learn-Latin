import dataDec from "../data/DeclensionCharts.json";
import dataFuture from "../data/FutureTenseChart.json";

const Row = (info) => {
  var name = dataDec["name-map"]["name-" + info.row];
  var chart = dataDec["d-" + info.count];
  var cName = "";

  if (info.chart === "f") {
    name = dataFuture["name-map"]["name-" + info.row];
    chart = dataFuture["f-" + info.count];
  }

  if (info.neuter === true) {
    chart = dataDec["d-" + info.count + "-n"];
  }

  if (info.answers === true) {
    cName = "Hidden";
  }

  const answerState = (event, name) => {
    event.target.className = name;
  };

  // For declensions with more than 1 possible ending
  const specialCheck = (event, value, chart) => {
    if (chart.every((item) => value.includes(item))) {
      answerState(event, "Right");
    } else {
      answerState(event, "Wrong");
    }
  };

  // checks that the right value is entered in the right spot on chart
  const handleChange = event => {
    let value = (event.target.value).toLowerCase();
    let id = event.target.id;
    if (value === "") {
      answerState(event, "Normal");
    } else if (id === "s-1" && info.count === 3 && info.neuter === true) {
      specialCheck(event, value, chart.First[0]);
    } else if (id === "s-4" && info.count === 3 && info.neuter === true) {
      specialCheck(event, value, chart.Fourth[0]);
    } else if (id === "s-1" && value === chart.First[0]) {
      answerState(event, "Right");
    } else if (id === "s-2" && value === chart.Second[0]) {
      answerState(event, "Right");
    } else if (id === "s-3" && value === chart.Third[0]) {
      answerState(event, "Right");
    } else if (id === "s-4" && value === chart.Fourth[0]) {
      answerState(event, "Right");
    } else if (id === "s-5" && value === chart.Fifth[0]) {
      answerState(event, "Right");
    } else if (id === "p-1" && value === chart.First[1]) {
      answerState(event, "Right");
    } else if (id === "p-2" && value === chart.Second[1]) {
      answerState(event, "Right");
    } else if (id === "p-3" && value === chart.Third[1]) {
      answerState(event, "Right");
    } else if (id === "p-4" && value === chart.Fourth[1]) {
      answerState(event, "Right");
    } else if (id === "p-5" && value === chart.Fifth[1]) {
      answerState(event, "Right");
    } else {
      answerState(event, "Wrong");
    }
  };

  return (
    <tr className={cName}>
      <td className="Side-Label">{name}</td>
      <td>
        <input type="text" placeholder="Enter Declension" id={"s-" + info.row} onChange={handleChange} className="Normal"/>
      </td>
      <td>
        <input type="text" placeholder="Enter Declension" id={"p-" + info.row} onChange={handleChange} className="Normal"/>
      </td>
    </tr>
  );
};

export default Row;
