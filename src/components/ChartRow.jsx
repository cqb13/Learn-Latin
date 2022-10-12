import data from '../data/charts.json';

const Row = (info) => {
  var name = data['name-map']['name-'+ info.row]
  var chart = data['d-'+ info.count +''];
  var cName = '';

  if (info.neuter === true) {
    chart = data['d-'+ info.count +'-n']
  }

  if (info.answers === true) {
    cName = 'Hidden'
  }

  const answerState = (event, name) => {
    event.target.className = name;
  }

  // For declensions with more than 1 possible ending
  const specialCheck = (event, value, chart) => {
    if (chart.every((item) => value.includes(item))) {
      answerState(event, "Right");
    } else {
      answerState(event, "Wrong");
    }
  }

  // checks that the right value is entered in the right spot on the chart
  const handleChange = event => {
    let value = (event.target.value).toLowerCase();
    let id = event.target.id;
    if (value === "") {
      answerState(event, "Normal");
    } else if (id === "s-1" && info.count === 3) {
      specialCheck(event, value, chart.Nominative[0]);
    } else if (id === "s-4" && info.count === 3) {
      specialCheck(event, value, chart.Accusative[0])
    } else if (id === "s-1" && value === chart.Nominative[0]){
      answerState(event, "Right");
    } else if (id === "s-2" && value === chart.Genative[0]) {
      answerState(event, "Right");
    } else if (id === "s-3" && value === chart.Dative[0]) {
      answerState(event, "Right");
    } else if (id === "s-4" && value === chart.Accusative[0]) {
      answerState(event, "Right");
    } else if (id === "s-5" && value === chart.Ablative[0]) {
      answerState(event, "Right");
    } else if (id === "p-1" && value === chart.Nominative[1]){
      answerState(event, "Right");
    } else if (id === "p-2" && value === chart.Genative[1]) {
      answerState(event, "Right");
    } else if (id === "p-3" && value === chart.Dative[1]) {
      answerState(event, "Right");
    } else if (id === "p-4" && value === chart.Accusative[1]) {
      answerState(event, "Right");
    } else if (id === "p-5" && value === chart.Ablative[1]) {
      answerState(event, "Right");
    } else {
      answerState(event, "Wrong");
    }
  };

  return (
    <tr className={cName}>
      <td className='Side-Label'>{name}</td>
      <td>
      <input type="text" placeholder='Enter Declension' id={'s-' + info.row} onChange={handleChange} className="Normal"/>
      </td>
      <td>
      <input type="text" placeholder='Enter Declension' id={'p-' + info.row} onChange={handleChange} className="Normal"/>
      </td>
    </tr>
  )
}

export default Row
