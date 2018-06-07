let timer;
let percent = 0;

let audios = document.getElementsByClassName("audio");
let playImgs = document.getElementsByClassName("playImage");

let behindButton = document.getElementById("behind");
let aheadButton = document.getElementById("ahead");
let startAgainButton = document.getElementById("startAgain");
let menuButton = document.getElementById("menuButton");
let x = document.getElementsByClassName("container");

let myIndex = 0;

for (i = 0; i < audios.length; i++) {
    audios[i].addEventListener("ended", toggleOnEnd);
}

carouselAhead();

function toggleOnEnd() {
    playImgs[myIndex - 1].src = "resources/images/play.png";

    menuButton.style.display = "block";

    if (myIndex === x.length) {
        startAgainButton.style.display = "block";
        behindButton.style.display = "block";
    } else if (myIndex === 1) {
        aheadButton.style.display = "block";
    } else {
        aheadButton.style.display = "block";
        behindButton.style.display = "block";
    }
}

function carouselBehind() {
    audios[myIndex - 1].pause();
    audios[myIndex - 1].currentTime = 0;
    toggleOnEnd();
    let i;

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex--;

    if (myIndex === 0) {
        myIndex = x.length - 1;
    }

    audios[myIndex - 1].play();
    playImgs[myIndex - 1].src = "resources/images/pause.png";

    menuButton.style.display = "none";
    behindButton.style.display = "none";
    aheadButton.style.display = "none";
    startAgainButton.style.display = "none";

    x[myIndex - 1].style.display = "block";
}

function carouselAhead() {
    if (myIndex !== 0) {
        audios[myIndex - 1].pause();
        audios[myIndex - 1].currentTime = 0;
        toggleOnEnd();
    }

    let i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex++;

    if (myIndex > x.length) {
        myIndex = 1;
    }

    audios[myIndex - 1].play();
    playImgs[myIndex - 1].src = "resources/images/pause.png";

    menuButton.style.display = "none";
    behindButton.style.display = "none";
    aheadButton.style.display = "none";
    startAgainButton.style.display = "none";

    x[myIndex - 1].style.display = "block";
}

let startTimer = function (duration, element) {
    if (percent < 100) {
        timer = setTimeout(function () {
            advance(duration, element)
        }, 100);
    }
}

function togglePlay(e) {
    e = e || window.event;
    let btn = e.target;
    if (!audios[myIndex - 1].paused) {
        btn.classList.remove('active');
        audios[myIndex - 1].pause();
        playImgs[myIndex - 1].src = "resources/images/play.png";
        isPlaying = false;

    } else {
        btn.classList.add('active');
        audios[myIndex - 1].play();
        playImgs[myIndex - 1].src = "resources/images/pause.png";
        isPlaying = true;
    }

    function pausePlay() {
        e = e || window.event;
        let btn = e.target;

        if (!audios[myIndex - 1].paused) {
            // btn.classList.remove('active');
            audios[myIndex - 1].pause();
            playImgs[myIndex - 1].src = "resources/images/play.png";
            isPlaying = false;
        }
    }

    function startPlay() {
        e = e || window.event;
        let btn = e.target;

        if (audios[myIndex - 1].paused) {
            // btn.classList.add('active');
            audios[myIndex - 1].play();
            playImgs[myIndex - 1].src = "resources/images/pause.png";
            isPlaying = true;
        }
    }

    function playHasEnded() {
        playImgs[myIndex - 1].src = "resources/images/play.png";
    }
}
