'use strict';

const playBtn = document.querySelector('.btn-play');
const introPage = document.querySelector('.header');
const gamePage = document.querySelector('.game-page');
const mushroom = document.querySelector('.mushroom');
const forestFloor = document.querySelector('.forest-floor')

const x = Math.floor(Math.random() * 82) + 12
const y = Math.floor(Math.random() * 89) + 1

console.log(document)
console.log(window)
//BTN Starts the Game
playBtn.addEventListener('click', function () {
  introPage.remove();
  gamePage.classList.remove('viewport');
 randomizeMush()
  
});

//Randomize Mushroom Location within ppic
const randomizeMush = function () {
  
  mushroom.style.top = `${y}%`
  mushroom.style.left = `${x}%`
  
};
