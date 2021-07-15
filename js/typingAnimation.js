new Typed(".title", {
  strings: ["HI, VISITORS.", "HI, I AM XENOVKA.", "WELCOME TO MY SITE."],
  backDelay: 500,
  typeSpeed: 50,
  backSpeed: 50,
  showCursor: true,
  cursorChar: "_",
  smartBackspace: true,
  loop: true
});

let counter = 0;
const startCounter = setInterval(() => {
  $(".number").text(numberCounter(20));
}, 50);

function numberCounter(target) {
  if (counter === target) {
    clearInterval(startCounter);
  } else {
    counter++;
  }

  return counter;
}
