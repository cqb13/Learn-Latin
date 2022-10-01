import data from './data/charts.json';

const Row = (info) => {
  var detail = "Enter";

  if (info.small == true) {
    detail = info.name;
  }

  const answerState = (event, name) => {
    event.target.className = name;
  }

  const handleChange = event => {
    var id = event.target.id;
    var value = event.target.value;
    var chart = data['d-'+ info.count +''];
    // checks that the right value is entered in the right spot on the chart
    if (value === "") {
      answerState(event, "Normal");
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
    <tr>
    <td className='Side-Label'>{info.name}</td>
    <td>
      <input type="text" placeholder={detail + ' Declension'} id={'s-' + info.row} onChange={handleChange} className="Normal"/>
    </td>
        <td>
      <input type="text" placeholder={detail + ' Declension'} id={'p-' + info.row} onChange={handleChange} className="Normal"/>
    </td>
  </tr>
  )
}

export default Row
