let output;
const calculator = document.getElementById("calc");
const keys = [
  ["C", "="],
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  [".", "0", "%", "/"],
];
const operations = ["+", "-", "*", "/", "%"];

const func = () => {
  output = document.createElement("div");
  output.innerText = "0";
  output.classList.add("output");
  calculator.appendChild(output);
  for (let x = 0; x < keys.length; x++) {
    let div = document.createElement("div");
    div.classList.add("row");
    for (let y = 0; y < keys[x].length; y++) {
      let btn = document.createElement("button");
      btn.classList.add("btn");
      btn.innerText = keys[x][y];
      div.appendChild(btn);
    }
    calculator.appendChild(div);
  }
};

document.addEventListener("DOMContentLoaded", func);
