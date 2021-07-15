const rectShape = new mojs.Shape({
  parent: ".animate",
  shape: "rect",
  fill: "none",
  radius: 120,
  stroke: { ["aqua"]: "magenta" },
  strokeWidth: { 14: 0 },
  strokeDasharray: "100%",
  strokeDashoffset: { "-100%": "100%" },
  rotate: { 0: 180 },
  delay: 0,
  duration: 4000,
  repeat: 99999
}).play();

const mediaWidth = window.matchMedia("(max-width: 600px)");

mediaWidthChange(mediaWidth);
mediaWidth.addEventListener("change", mediaWidthChange);

function mediaWidthChange(width) {
  if (width.matches) {
    rectShape._props.radius = 60;
  } else {
    rectShape._props.radius = 120;
  }
}
