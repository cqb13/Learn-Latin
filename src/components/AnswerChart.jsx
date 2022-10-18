import dataDec from '../data/DeclensionCharts.json';
import dataFuture from "../data/FutureTenseChart.json";
import dataPresent from "../data/PersonalEndingsChart.json";

const AnswerRow = (info) => {
  var name = dataDec['name-map']['name-'+ info.row]
  var chart = dataDec['d-'+ info.count];
  var cName = '';
  var singular;
  var plural;

  if (info.chart === "f") {
    name = dataFuture["name-map"]["name-" + info.row];
    chart = dataFuture["f-" + info.count];
  } else if (info.chart === "p") {
    name = dataPresent["name-map"]["name-" + info.row];
    chart = dataPresent["p-1"];
  }

  if (info.neuter === true) {
    chart = dataDec['d-'+ info.count +'-n'];
  }

  if (info.meaning === true) {
    chart = dataPresent["p-1-m"];
  }

  if (info.answers === false) {
    cName = 'Hidden';
  }

  if (name === "Nominative" || name === "1st") {
    singular = chart.First[0];
    plural = chart.First[1];
  } else if (name === "Genative" || name === "2nd") {
    singular = chart.Second[0];
    plural = chart.Second[1];
  } else if (name === "Dative" || name === "3rd") {
    singular = chart.Third[0];
    plural = chart.Third[1];
  } else if (name === "Accusative") {
    singular = chart.Fourth[0];
    plural = chart.Fourth[1];
  } else if (name === "Ablative"){
    singular = chart.Fifth[0];
    plural = chart.Fifth[1];
  }

  return (
    <tr className={cName}>
      <td className='Side-Label'>{name}</td>
      <td>
      <input type="text" value={singular} className="Right" readOnly/>
      </td>
      <td>
      <input type="text" value={plural} className="Right" readOnly/>
      </td>
    </tr>
  )
}

export default AnswerRow
