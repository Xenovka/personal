new Typed(".title", {
  strings: ["HI, VISITORS.", "I AM WENDY.", "WELCOME TO MY SITE."],
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
  $(".number").text(numberCounter(99));
}, 10);

function numberCounter(target) {
  if (counter === target) {
    clearInterval(startCounter);
  } else {
    counter++;
  }

  return counter;
}
