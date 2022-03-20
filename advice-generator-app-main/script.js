const findQuote = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const quote = await res.json();
  document.querySelector(".advice_number_api").innerText = quote.slip.id;
  document.querySelector(".advice_quote").innerText = quote.slip.advice;
};

const diceOnClick = function () {
  document.querySelector(".dice").addEventListener("click", findQuote);
};

findQuote();
diceOnClick();
