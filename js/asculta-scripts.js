let timer;
let percent = 0;
let audios = document.getElementsByClassName("audio");
let playImgs = document.getElementsByClassName("playImage");

let indexulMeu = 0;


for (i = 0; i < audios.length; i++) {
    // console.log(audios[i]);
    audios[i].addEventListener("ended", toggleOnEnd);
}

carouselAhead();

function toggleOnEnd() {
    playImgs[indexulMeu - 1].src = "resources/images/play.png";
}

function carouselBehind() {
    audios[indexulMeu - 1].pause();
    audios[indexulMeu - 1].currentTime = 0;
    toggleOnEnd();
    let i;
    let x = document.getElementsByClassName("container");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    indexulMeu--;

    if (indexulMeu === 0) {
        indexulMeu = x.length - 1;
    }

    audios[indexulMeu - 1].play();
    playImgs[indexulMeu - 1].src = "resources/images/pause.png";

    let behindButton = document.getElementById("behind");
    let aheadButton = document.getElementById("ahead");
    // let goToMenuButton = document.getElementById("goToMenu");
    let startAgainButton = document.getElementById("startAgain");

    if (indexulMeu === 1) {
        behindButton.style.display = "none";
    } else {
        behindButton.style.display = "block";
    }

    if (indexulMeu !== x.length) {
        aheadButton.style.display = "block";
        // goToMenuButton.style.display = "none";
        startAgainButton.style.display = "none";
    }

    x[indexulMeu - 1].style.display = "block";
}

function carouselAhead() {
    if (indexulMeu !== 0) {
        audios[indexulMeu - 1].pause();
        audios[indexulMeu - 1].currentTime = 0;
        toggleOnEnd();
    }

    let i;
    let x = document.getElementsByClassName("container");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    indexulMeu++;

    if (indexulMeu > x.length) {
        indexulMeu = 1;
    }

    audios[indexulMeu - 1].play();
    playImgs[indexulMeu - 1].src = "resources/images/pause.png";

    let behindButton = document.getElementById("behind");
    let aheadButton = document.getElementById("ahead");
    // let goToMenuButton = document.getElementById("goToMenu");
    let startAgainButton = document.getElementById("startAgain");

    if (indexulMeu === x.length) {
        // goToMenuButton.style.display = "block";
        startAgainButton.style.display = "block";
        aheadButton.style.display = "none";
        behindButton.style.display = "block";
    } else if (indexulMeu === 1) {
        // goToMenuButton.style.display = "none";
        startAgainButton.style.display = "none";
        aheadButton.style.display = "block";
        behindButton.style.display = "none";
    } else {
        // goToMenuButton.style.display = "none";
        startAgainButton.style.display = "none";
        aheadButton.style.display = "block";
        behindButton.style.display = "block";
    }

    x[indexulMeu - 1].style.display = "block";
}

// audio.addEventListener("playing", function (_event) {
//     let duration = _event.target.duration;
//     advance(duration, audio);
// });
//
// audio.addEventListener("pause", function (_event) {
//     clearTimeout(timer);
// });

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
    if (!audios[indexulMeu - 1].paused) {
        btn.classList.remove('active');
        audios[indexulMeu - 1].pause();
        playImgs[indexulMeu - 1].src = "resources/images/play.png";
        isPlaying = false;

    } else {
        btn.classList.add('active');
        audios[indexulMeu - 1].play();
        playImgs[indexulMeu - 1].src = "resources/images/pause.png";
        isPlaying = true;
    }

    function pausePlay() {
        e = e || window.event;
        let btn = e.target;

        if (!audios[indexulMeu - 1].paused) {
            // btn.classList.remove('active');
            audios[indexulMeu - 1].pause();
            playImgs[indexulMeu - 1].src = "resources/images/play.png";
            isPlaying = false;
        }
    }

    function startPlay() {
        e = e || window.event;
        let btn = e.target;

        if (audios[indexulMeu - 1].paused) {
            // btn.classList.add('active');
            audios[indexulMeu - 1].play();
            playImgs[indexulMeu - 1].src = "resources/images/pause.png";
            isPlaying = true;
        }
    }

    function playHasEnded() {
        playImgs[indexulMeu - 1].src = "resources/images/play.png";
    }
}
