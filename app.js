'use strict';

const playBtn = document.querySelector('.btn-play');
const replayBtn = document.querySelector('.btn-replay');
const introPage = document.querySelector('.header');
const gamePage = document.querySelector('.game-page');
const mushroom = document.querySelector('.mushroom');
const forestFloor = document.querySelector('.forest-floor');
const gameOver = document.querySelector('.game-over');
const body = document.querySelector('body');
const timer = document.querySelector('.clock');
const points = document.querySelector('.points');

let time = 10;
let score = 0;

//HighLights Mushroom After Click
const addHighlight = function () {
  mushroom.classList.add('highlight');
  mushroom.style.opacity = 1;

  const opacity = Math.floor(Math.random() * 7) + 4;

  setTimeout(function () {
    mushroom.style.opacity = `0.${opacity}`;
    mushroom.classList.remove('highlight');
    randomizeMushLoc();
    addRotation();
    addSize();
  }, 1000);
};

const addSize = function () {
  const size = Math.floor(Math.random() * 5) + 3;
  mushroom.style.width = `${size}%`;
  console.log(`Mushroom is ${size}%`);
};

const addRotation = function () {
  const degree = Math.floor(Math.random() * 90) + -90;
  mushroom.style.transform = `rotate(${degree}deg)`;
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

//adds the 0 score after new game
const addScore = function () {
  points.textContent = score < 10 ? `0${score}` : `${score}`;
};

//Add Points
const addPoints = function () {
  score += 5;
  points.textContent = score < 10 ? `0${score}` : `${score}`;
};

//Game Over Sequence
const gameEnd = function () {
  setTimeout(function () {
    // gamePage.parentNode.removeChild(gamePage);
    // gameEndHtml();
    gamePage.style.display = 'none';
    gameOver.classList.remove('game-over-viewport');
    document.querySelector('.final-score').textContent = score;
  }, 1000);
  addHighlight();
};

const gameEndHtml = function () {
  const html = `<div class="game-over">
      <div class="container">
        <div>Game Over</div>
        <div>${score}</div>
        <button type="button" class="btn btn-replay">Play</button>
      </div>
   </div>`;

  body.insertAdjacentHTML('beforeend', html);
};

const gameRestartHtml = function () {
  const html = `<div class="game-page section">
  <div class="container game-container">
  <div class="timer">
  <div class="clock"></div>
  </div>
  <img
  class="forest-floor"
  src="/img/wallpaperflare.com_wallpaper.jpg"
  alt="forest floor"
  />
  
  <img
  class="mushroom"
  src="/img/—Pngtree—morel mushroom_5786360.png"
  alt="Morel"
  />
  <div class="scoreboard">
  <div class="points">00</div>
  </div>
  </div>
  </div>`;

  // restartViewport.classList.remove('viewport')
  body.insertAdjacentHTML('beforebegin', html);

  time = 10;
  score = 0;
};

//*******************************************************
//main game

//BTN Starts the Game
playBtn.addEventListener('click', function () {
  introPage.remove();
  gamePage.classList.remove('viewport');
  randomizeMushLoc();
  gameTimer();
  addSize();
});

//Click Morel
mushroom.addEventListener('click', function () {
  console.log('click');
  time += 3;
  addHighlight();
  addPoints();
});

//Replay Game
replayBtn.addEventListener('click', function () {
  gameOver.classList.add('game-over-viewport');
  gamePage.style.display = '';
  time = 10;
  score = 0;

  randomizeMushLoc();
  gameTimer();
  addSize();
  addScore();

  //retart time and score

  //
});

// document.body.addEventListener('click', function (e) {
//   if (e.target && e.target.classList.contains('btn-replay')) {
//     const gameOver = document.querySelector('.game-over');
//     gameOver.remove();
//     console.log('hello')

//   }
// });

