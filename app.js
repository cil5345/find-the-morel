'use strict';

const playBtn = document.querySelector('.btn-play');
const introPage = document.querySelector('.header');
const gamePage = document.querySelector('.game-page');
const mushroom = document.querySelector('.mushroom');
const forestFloor = document.querySelector('.forest-floor');
const body = document.querySelector('body');
const timer = document.querySelector('.clock');
const points = document.querySelector('.points');

let time = 10;
let score = 0;

//HighLights Mushroom After Click
const addHighlight = function () {
  mushroom.classList.add('highlight');
  mushroom.style.opacity = 1;

  setTimeout(function () {
    mushroom.style.opacity = 0.7;
    mushroom.classList.remove('highlight');
    randomizeMushLoc();
  }, 1000);
};

//Randomize Mushroom Location within ppic
const randomizeMushLoc = function () {
  const x = Math.floor(Math.random() * (82 - 12 + 1) + 12);
  const y = Math.floor(Math.random() * 89) + 1;
  console.log(x, y);
  mushroom.style.left = `${x}%`;
  mushroom.style.top = `${y}%`;
};

//Starts Game Clock
const gameTimer = function () {
  timer.textContent = time < 10 ? `0:0${time}` : `0:${time}`;
  const clock = setInterval(function () {
    timer.textContent = time < 10 ? `0:0${time}` : `0:${time}`;
    time--;

    if (time < 0) {
      clearInterval(clock);
      gameEnd();
    }
  }, 1000);
};

//Add Points
const addPoints = function () {
  score += 4;
  points.textContent = score < 10 ? `0${score}` : `${score}`;
};

//Game Over Sequence
const gameEnd = function () {
  gamePage.parentNode.removeChild(gamePage);
  gameEndHtml();
};

const gameEndHtml = function () {
  const html = 
  `<div class="game-over">
      <div class="container">
        <div>Game Over</div>
        <button type="button" class="btn btn-replay">Play</button>
      </div>
   </div>`
  body.insertAdjacentHTML('beforeend', html);
};

//*******************************************************
//main game

//BTN Starts the Game
playBtn.addEventListener('click', function () {
  introPage.remove();
  gamePage.classList.remove('viewport');
  randomizeMushLoc();
  gameTimer();
});

//Click Morel
mushroom.addEventListener('click', function () {
  console.log('click');
  time += 2;
  addHighlight();
  addPoints();
});
