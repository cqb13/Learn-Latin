//???: this runs 2 times, not sure why
const Chart = (info) => {
  var singularAnswer;
  var pluralAnswer;
  var readOnly = false;

  if (info.answers === true) {
    var input = document.getElementsByName("answer");
    for (let i = 0; i < input.length; i++) {
      input[i].className = "Right";
    }
    readOnly = true
    singularAnswer = info.info[1]
    pluralAnswer = info.info[2]
  } else {
    readOnly = false
  }

  const handleChange = (event) => {
    var value = event.target.value.toLowerCase();
    var id = event.target.id;
    if (value === "") {
      event.target.className = "Normal";
    } else if (id.includes(',')) {
      checkList(value, id, event);
    } else if (id === value) {
      event.target.className = "Right";
    } else {
      event.target.className = "Wrong";
    }
  }

  const checkList = (value, id, event) => {
    id = id.split(",").join("");
    id = id.split("");
    //checks that all the right characters are included, and that they are not repeated
    if (id.length === value.length && id.every((item) => value.includes(item))) {
      event.target.className = "Right";
    } else {
      event.target.className = "Wrong";
    }
  }

  return (
    <tr>
      <td className="Side-Label">{info.info[0]}</td>
      <td>
        <input value={singularAnswer} type="text" placeholder="Enter Declension" id={info.info[1]} className="Normal" onChange={handleChange} name="answer" readOnly={readOnly}/>
      </td>
      <td>
        <input value={pluralAnswer} type="text" placeholder="Enter Declension" id={info.info[2]} className="Normal" onChange={handleChange} name="answer" readOnly={readOnly}/>
      </td>
    </tr>
  );
};

export default Chart;
