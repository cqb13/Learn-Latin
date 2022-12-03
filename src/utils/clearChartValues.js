const clearChartValues = () => {
  var input = document.getElementsByName("user-input");
  for (let i = 0; i < input.length; i++) {
    input[i].className = "Normal";
    input[i].value = "";
  }
};

export default clearChartValues;