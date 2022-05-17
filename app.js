'use strict';

const playBtn = document.querySelector('.btn-play');
const introPage = document.querySelector('.header');
const gamePage = document.querySelector('.game-page');
const mushroom = document.querySelector('.mushroom');
const forestFloor = document.querySelector('.forest-floor');
const timer = document.querySelector('.clock')
let time = 10

//BTN Starts the Game
playBtn.addEventListener('click', function () {
  introPage.remove();
  gamePage.classList.remove('viewport');
  randomizeMushLoc();
  gameTimer()
});

//Click Morel
mushroom.addEventListener('click', function () {
  console.log('click');
  time += 3
  addHighlight()
  
});

//Randomize Mushroom Location within ppic
const randomizeMushLoc = function () {
  const x = Math.floor(Math.random() * (82 - 12 + 1) + 12)
  const y = Math.floor(Math.random() * 89) + 1;
  console.log(x, y)
  mushroom.style.left = `${x}%`;
  mushroom.style.top = `${y}%`;
};

const addHighlight = function() {
  mushroom.classList.add('highlight')
  mushroom.style.opacity = 1

  setTimeout(function() {
    mushroom.style.opacity = 0.7
    mushroom.classList.remove('highlight')
    randomizeMushLoc()
  }, 1000)
}


const gameTimer =  function() {
  timer.textContent = `0:${time}`
  const clock = setInterval(function() {
  timer.textContent = time < 10 ? `0:0${time}` : `0:${time}`
  time --;

  if (time < 0) {
    clearInterval(clock)
  }
  }, 1000)
}
