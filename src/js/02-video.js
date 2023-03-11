import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const playerCurrentTime = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// const pauseTime = (e) => {
//   localStorage.setItem(playerCurrentTime, e.seconds);
// };



player.setCurrentTime(JSON.parse(localStorage.getItem(playerCurrentTime)))
.then(function(seconds) {})
.catch (function(error) {
    switch (error.name) {
        case 'RangeError':
           
            break;

        default:
          
            break;
    }
});


player.on('timeupdate', throttle(player.setCurrentTime, 1000));