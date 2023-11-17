import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function currentVideoTime() {
  player.on('timeupdate', function () {
    let value = 0;
    value += event.data.data.seconds;

    localStorage.setItem('videoplayer-current-time', value);
  });
}

currentVideoTime();

const currentBreakpoint = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentBreakpoint);
