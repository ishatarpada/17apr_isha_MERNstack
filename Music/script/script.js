function toggleMenu() {
    var menuList = document.getElementById("menuList");
    if (menuList.style.display === "block") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
    }
}

//play the songs
const playButtons = document.querySelectorAll('.playbtn');
const audioPlayers = document.querySelectorAll('audio');

//click event for play the songs
playButtons.forEach((playButton, index) => {
    const audioPlayer = audioPlayers[index];
    const playIcon = playButton.querySelector('i');

    playButton.addEventListener('click', function () {
        if (audioPlayer.paused || audioPlayer.ended) {
            audioPlayer.play();
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
        } else {
            audioPlayer.pause();
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
        }
    });

    audioPlayer.addEventListener('ended', function () {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    });
});