//intialize the count as 0
// listen for clicks ont the ncrement button
//increment the count variable when the button is clicked
//change the count-el in the HTML

let countEl = document.getElementById("count-el"); // pass in arguments
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
