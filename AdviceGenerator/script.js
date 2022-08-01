const apiLink = "https://api.adviceslip.com/advice";
const adviceNumber = document.getElementById("adno");
const adviceQuote = document.getElementById("quote");
const fetchBtn = document.querySelector("button.advice-generator-btn");
const fetchAdvice = async () => {
  const response = await fetch(apiLink);
  const data = await response.json();
  return data;
};

const renderAdvice = (adviceObj) => {
  const { id, advice } = adviceObj;
  adviceNumber.innerHTML = `Advice  #${id}`;
  adviceQuote.innerHTML = advice;
};

const generateNewAdvice = async () => {
  const data = await fetchAdvice();
  const advice = data.slip;
  renderAdvice(advice);
};

window.addEventListener("DOMContentLoaded", () => {
  fetchBtn.addEventListener("click", generateNewAdvice);
});
