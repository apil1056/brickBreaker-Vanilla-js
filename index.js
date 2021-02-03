import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Game from "./game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

// clearing screen bw every frame

// GAME LOOP
let lastTime = 0;

//images

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
