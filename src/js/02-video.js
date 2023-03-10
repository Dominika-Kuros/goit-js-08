

const playerCurrentTime = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const pauseTime = () => {
  localStorage.setItem(playerCurrentTime, seconds);
};
player.on('timeupdate', throttle(pauseTime, 1000));


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


// player.setCurrentTime(JSON.parse(localStorage.getItem(playerCurrentTime)) || 0);