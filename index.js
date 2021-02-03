let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// clearing screen bw every frame
ctx.clearRect(0, 0, 800, 600);

ctx.fillStyle = "#00f";
ctx.fillRect(50, 20, 100, 100);
