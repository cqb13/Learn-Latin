import data from '../data/charts.json';

const AnswerRow = (info) => {
  var name = data['name-map']['name-'+ info.row]
  var chart = data['d-'+ info.count];
  var cName = '';
  var singular;
  var plural;

  if (info.answers === false) {
    cName = 'Hidden'
  }

  if (name === "Nominative") {
    singular = chart.Nominative[0];
    plural = chart.Nominative[1];
  } else if (name === "Genative") {
    singular = chart.Genative[0];
    plural = chart.Genative[1];
  } else if (name === "Dative") {
    singular = chart.Dative[0];
    plural = chart.Dative[1];
  } else if (name === "Accusative") {
    singular = chart.Accusative[0];
    plural = chart.Accusative[1];
  } else {
    singular = chart.Ablative[0];
    plural = chart.Ablative[1];
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
