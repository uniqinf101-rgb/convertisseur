let input = "";
const inputDisplay = document.getElementById("inputDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const rate = 132; // 1 USD = 132 HTG

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("clear")) {
      input = "";
      inputDisplay.textContent = "0";
      resultDisplay.textContent = "";
    } else if (btn.dataset.num) {
      input += btn.dataset.num;
      inputDisplay.textContent = input;
    } else if (btn.classList.contains("usd-to-htg")) {
      convertToHTG();
    } else if (btn.classList.contains("htg-to-usd")) {
      convertToUSD();
    }
  });
});

function convertToHTG() {
  if (!input) return;
  const usd = parseFloat(input);
  const htg = (usd * rate).toFixed(2);
  resultDisplay.textContent = `${usd} USD = ${htg} HTG`;
}

function convertToUSD() {
  if (!input) return;
  const htg = parseFloat(input);
  const usd = (htg / rate).toFixed(2);
  resultDisplay.textContent = `${htg} HTG = ${usd} USD`;
}