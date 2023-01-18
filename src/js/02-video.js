import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");

const videoPlayerCurrentTime = 'videoplayer-current-time';

const startTime = window.localStorage.getItem(videoPlayerCurrentTime);

const saveSeconds = (seconds) => {
    window.localStorage.setItem(videoPlayerCurrentTime, seconds);
    console.log(window.localStorage)
};


const player = new Player(iframe);

 
player.on('play', function () {
    console.log('played the video!');
});


player.on('timeupdate', throttle((data) => saveSeconds(data.seconds), 1000));

player.setCurrentTime(startTime).then(function(seconds) {
    console.log(seconds)
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});