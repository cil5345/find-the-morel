'use strict';

const playBtn = document.querySelector('.btn-play');
const introPage = document.querySelector('section');
const gamePage = document.querySelector('.game-page');
const mushroom = document.querySelector('.mushroom');
const forestFloor = document.querySelector('.forest-floor')



console.log(document)
console.log(window)
//BTN Starts the Game
playBtn.addEventListener('click', function () {
  introPage.remove();
  gamePage.classList.remove('viewport');
 
  
});

//Randomize Mushroom Location within ppic
const randomizeMush = function () {
  
  mushroom.style.top = `${x}px`
  mushroom.style.bottom = `${y}px`
  
};
