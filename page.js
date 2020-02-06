var colorWell;
var defaultColor = "#e7f6fd";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function updateFirst(event) {
  var p = document.querySelector("p");

  if (p) {
    p.style.color = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}

function updateTextInput(val) {
  document.getElementById("textInput").value = val;
}

function updateSalaryInput(val) {
  document.getElementById("Salary").value = val;
}

var loadFile = function(event) {
  var output = document.getElementById("output");
  output.src = URL.createObjectURL(event.target.files[0]);
};
