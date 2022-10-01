import data from './data/charts.json';

const Row = (info) => {

    const answerState = (event, name) => {
      event.target.className = name;
    }
  
    const handleChange = event => {
      var id = event.target.id;
      var value = event.target.value;
      if (value === "") {
        answerState(event, "Normal");
      } else if (id === "s-1" && value === data['d-'+ info.count +''].Nominative[0]){
        answerState(event, "Right");
      } else if (id === "s-2" && value === data['d-'+ info.count +''].Genative[0]) {
        answerState(event, "Right");
      } else if (id === "s-3" && value === data['d-'+ info.count +''].Dative[0]) {
        answerState(event, "Right");
      } else if (id === "s-4" && value === data['d-'+ info.count +''].Accusative[0]) {
        answerState(event, "Right");
      } else if (id === "s-5" && value === data['d-'+ info.count +''].Ablative[0]) {
        answerState(event, "Right");
      } else if (id === "p-1" && value === data['d-'+ info.count +''].Nominative[1]){
        answerState(event, "Right");
      } else if (id === "p-2" && value === data['d-'+ info.count +''].Genative[1]) {
        answerState(event, "Right");
      } else if (id === "p-3" && value === data['d-'+ info.count +''].Dative[1]) {
        answerState(event, "Right");
      } else if (id === "p-4" && value === data['d-'+ info.count +''].Accusative[1]) {
        answerState(event, "Right");
      } else if (id === "p-5" && value === data['d-'+ info.count +''].Ablative[1]) {
        answerState(event, "Right");
      } else {
        answerState(event, "Wrong");
      }
    };
  
    return (
      <tr>
      <td>{info.name}</td>
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