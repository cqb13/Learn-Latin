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

  const checkList = (value, id, event) => {
    var right = 0;
    id = id.split(",");
    var list = id;
    id = id.join("");
    id = id.split("");
    value = value.split(" ").join("");
    value = value.replace(/[^a-zA-Z]/g, "");
    //checks that all the right characters are included, and that they are not repeated
    if (id.length === value.length && id.every((item) => value.includes(item))) {
      // my way of checking spelling of words in list
      for (let i = 0; i < list.length; i++) {
        if (value.includes(list[i])) {
          right++;
        }
      }
      if (right === list.length) {
        event.target.className = "Right";
      }
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
