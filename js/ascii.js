"use strict";

let currentAnimation;
let interval;
let speed = 250;

window.onload = pageLoad;

/*       === ** Initial set up for page load  **  ====            */

function pageLoad() {
  document.getElementById('stop').disabled = true;
  document.getElementById('start').onclick = start;
  document.getElementById('stop').onclick = stop;
  document.getElementById('animation').onchange = animation;
  document.getElementById('fontsize').onchange = changeFontSize;

  let radio = document.getElementById('turbo');
  let current = radio.value;
  radio.onclick = (function (current) {
    return function () {
      if (interval) {
        clearInterval(interval);
      }
      if (document.getElementById('start').disabled) 
      {
        interval = setInterval(function () {
          updateFrame(currentAnimation);
        }, current);
      }
    };
  })(current);
}


/*       ===s ** tarts Animating the frames **  ====             */

function animation() {
  let animation = document.getElementById('animation').value;
  let txtArea = document.getElementById('text-area');
  txtArea.value = ANIMATIONS[animation];
}


/*       === ** starts the game  **  ====             */


function start() {
  document.getElementById('stop').disabled = false;
  document.getElementById('start').disabled = true;
  document.getElementById('animation').disabled = true;

  let txtArea = document.getElementById('text-area');
  let frames = txtArea.value.split('=====\n');
  currentAnimation = frames;
  interval = setInterval(function () {
    updateFrame(currentAnimation);
  }, speed);
}


/*       === ** Stops the play control  **  ====            */

function stop() {
  document.getElementById('start').disabled = false;
  document.getElementById('animation').disabled = false;
  animation();
  clearInterval(interval);
  document.getElementById('stop').disabled = true;
}


/*       === ** updates the frame size **  ====             */  

function updateFrame(animation) {
  let txtArea = document.getElementById('text-area');
  let current = animation.shift();
  txtArea.value = current;
  animation.push(current);
  current = animation;
}


/*       === ** changes the font size **  ====              */

function changeFontSize() {
  let size = document.getElementById('fontsize').value;
  document.getElementById('text-area').style.fontSize = size;
}
