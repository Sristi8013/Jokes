
const button = document.querySelector(".button");
const cont = document.querySelector(".container");
const stringsArray = [' Why should not you marry a calendar? Its days are numbered 😍', 'Why was the broom late for school? It over-swept 😁', 'What did the comforter say after falling off the bed? Oh, sheet! 😂', 'KEEP SMILING,BYE BYE 😃'];
let index = 0;

button.addEventListener('click', () => {
  if (index > 3) {
    index = 0;
  }
  cont.textContent = stringsArray[index];
  index++
})

