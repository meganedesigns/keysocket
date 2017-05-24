function onKeyPress(key) {
    if (key === PLAY) {
        var playPauseButton = document.querySelector('.vjs-play-control');
        simulateClick(playPauseButton);
    }
}
