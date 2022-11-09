const Chart = ({info, answers}) => {
  var input = document.getElementsByName("user-input");
  var useable = [];
  var RowValue;

  //removes first item from data array leaving answers
  for (let i = 1; i < info.length; i++) {
    useable.push(info[i])
  }

  if (answers === true) {
    for (let i = 0; i < input.length; i++) {
      input[i].className = "Right";
    }
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

  //TODO: for words there needs to be a way to check the spelling of the word
  //!!! words will be marked right bc all chars are correct but the word is wrong
  //TODO: remove all none letter chars from input
  //TODO: fuck around a lot with this thing to fix it
  const checkList = (value, id, event) => {
    id = id.split(",").join("");
    id = id.split("");
    value = value.split(" ").join("");
    //checks that all the right characters are included, and that they are not repeated
    if (id.length === value.length && id.every((item) => value.includes(item))) {
      event.target.className = "Right";
    } else {
      event.target.className = "Wrong";
    }
  }


  const Row = ({data}) => {
    if (answers === true) {
      RowValue = (
        <input type="text" value={data} className="Right" readOnly/>
      );
    } else {
      RowValue = (
        <input type="text" placeholder="Enter Declension" id={data} className="Normal" onChange={handleChange} name="user-input"/>
      );
    }

    return (
      <td>
       {RowValue}
      </td>
    )
  }

  return (
    <tr>
      <td className="Side-Label">{info[0]}</td>
      {useable?.length > 0 ? (
        <>
          {useable.map((data) => (
            <Row data={data}/>
          ))}
        </>
      ) : (<></>)}
    </tr>
  );
};

export default Chart;
