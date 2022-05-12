'use strict';

const playBtn = document.querySelector('.btn-play');
const introPage = document.querySelector('section');
const gamePage = document.querySelector('.game-page');

//BTN Starts the Game
playBtn.addEventListener('click', function () {
  introPage.remove()
  gamePage.classList.remove('.game-page')
  

});
