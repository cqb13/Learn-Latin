const endings = ["", "1st", "2nd", "3rd"];

const clearChartValues = () => {
  var input = document.getElementsByName("user-input");
  for (let i = 0; i < input.length; i++) {
    input[i].className = "Normal";
    input[i].value = "";
  }
};

export {clearChartValues, endings};
