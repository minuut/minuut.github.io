const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const targetText = "Hey!, I'm Yonnie";

let iteration = 0;

const interval = setInterval(() => {
  const $textNode = $(".display-2--intro");
  const text = $textNode.text();
  const newText = text
    .split("")
    .map((letter, index) => {
      if (index < iteration) {
        return targetText[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    })
    .join("");
  $textNode.text(newText);
  if (iteration >= targetText.length) {
    clearInterval(interval);
  }
  iteration += 1 / 3;
}, 50);