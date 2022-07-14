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

function press(e) {
  let entry = this.innerText;
  console.log(entry);
  let value = output.innerText;
  if (value == "0") {
    value = "";
  }
  if (operations.includes(entry)) {
    value = eval(value);
  }
  value += entry;
  console.log(entry);
  console.log(value);
  output.innerText = value;
}

const func = () => {
  output = document.createElement("div");
  output.innerText = "0";
  output.classList.add("output");
  calculator.appendChild(output);
  for (let x = 0; x < keys.length; x++) {
    let div = document.createElement("div");
    if (x == 0) {
      div.classList.add("row1");
    } else {
      div.classList.add("row");
    }
    for (let y = 0; y < keys[x].length; y++) {
      let btn = document.createElement("button");
      btn.classList.add("btn");
      btn.addEventListener("click", press);
      btn.innerText = keys[x][y];
      div.appendChild(btn);
    }
    calculator.appendChild(div);
  }
};

document.addEventListener("DOMContentLoaded", func);
