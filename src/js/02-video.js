import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function currentVideoTime() {
  player.on(
    'timeupdate',
    throttle(function (event) {
      // не розумію, чому коли я передав у метод "throttle" - event, то я відразу отримав доступ до об'єкта з доступом до тайм лайну.
      //До цього я використовував повний шлях event.data.data.seconds
      // console.log(event);
      let value = 0;
      console.log(event.seconds);
      value += event.seconds;

      localStorage.setItem('videoplayer-current-time', value);
    }, 1000)
  );
}
currentVideoTime();

if (localStorage.getItem('videoplayer-current-time') !== null) {
  const currentBreakpoint = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(currentBreakpoint);
} else {
  player.setCurrentTime(0);
}
