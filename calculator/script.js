const displayHistory= document.querySelector(".display-history");
const display = document.querySelector(".display-input");
const tempResult = document.querySelector(".temp-result");
const numbers= document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const allClear = document.querySelector(".all-clear");
const clearLast = document.querySelector(".last-entity-clear");

let dis1Num = "";
let dis2Num = "";
let result = 0;
let lastOperation = "";
let haveDot = false;

numbers.forEach((number) => {
number.addEventListener("click", (e) => {
if (e.target.innerText === "." && !haveDot) {
console.log("sudah ada dot", e.target.innerText)
haveDot = true;
} else if (e.target.innerText === "." && haveDot) {
return;
}
dis2Num += e.target.innerText;
display.innerText = dis2Num;
})
});

operation.forEach((operation) => {
operation.addEventListener("click", (e) => {
if (!dis2Num) return;
haveDot = false;
const operationName = e.target.innerText;
if (dis1Num && dis2Num && lastOperation) {
mathOperation()
} else {
result = parseFloat(dis2Num);
}
clearVar(operationName);
lastOperation = operationName;

})
})

function clearVar(name = "") {
dis1Num += dis2Num + " " + name + " ";
displayHistory.innerText = dis1Num;
display.innerText = "";
dis2Num = "";
tempResult.innerText = result;
}

function mathOperation() {
if (lastOperation === "x"){
result = parseFloat(result) * parseFloat(dis2Num);
} else if (lastOperation === "+") {
result = parseFloat(result) + parseFloat(dis2Num);
} else if (lastOperation === "-"){
result = parseFloat(result) - parseFloat(dis2Num);
} else if (lastOperation === "/") {
result = parseFloat(result) / parseFloat(dis2Num);
} else if (lastOperation === "%") {
result = parseFloat(result) % parseFloat(dis2Num);
}
}

equal.addEventListener("click", (e) => {
if (!dis1Num || !dis2Num) return;
haveDot = false;
mathOperation();
clearVar();
display.innerText = result;
tempResult.innerText = "";
dis2Num = result;
dis1Num = "";
})
allClear.addEventListener("click", () => {
displayHistory.innerText = "";
display.innerText = "";
tempResult.innerText = "";
dis1Num = "";
dis2Num = "";
result = "";
haveDot = false;
})

clearLast.addEventListener("click", () => {
display.innerText = "";
dis2Num = "";
tempResult.innerText = result;
haveDot = false;
})

window.addEventListener("keydown", (e) => {
if ( e.key === "0" ||
e.key === "1" ||
e.key === "2" ||
e.key === "3" ||
e.key === "4" ||
e.key === "5" ||
e.key === "6" ||
e.key === "7" ||
e.key === "8" ||
e.key === "9") {
clickButton(e.key);
} else if (e.key === "Enter") {
clickButton("=");
} else if (e.key === "Backspace") {
clickButton("C");
} else if (e.key === "Escape") {
clickButton("AC");
} else if (e.key === "+" ||
e.key === "-" ||
e.key === "*" ||
e.key === "/" ||
e.key === "%") {
clickButton(e.key);
}
})

function clickButton(key) {
numbers.forEach((number) => {
if (number.innerText === key) {
number.click();
}
})
}