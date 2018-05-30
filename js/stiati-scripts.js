let timer;
let percent = 0;
let audios = document.getElementsByClassName("audio");
let playImgs = document.getElementsByClassName("playImage");

let myIndex = 0;


for (i = 0; i < audios.length; i++) {
    // console.log(audios[i]);
    audios[i].addEventListener("ended", toggleOnEnd);
}

carouselAhead();

function toggleOnEnd() {
    playImgs[myIndex - 1].src = "resources/images/play.png";
}

function carouselBehind() {
    audios[myIndex - 1].pause();
    toggleOnEnd();
    let i;
    let x = document.getElementsByClassName("container");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex--;

    if (myIndex === 0) {
        myIndex = x.length - 1;
    }

    let behindButton = document.getElementById("behind");
    let aheadButton = document.getElementById("ahead");
    // let goToMenuButton = document.getElementById("goToMenu");
    let startAgainButton = document.getElementById("startAgain");

    if (myIndex === 1) {
        behindButton.style.display = "none";
    } else {
        behindButton.style.display = "block";
    }

    if (myIndex !== x.length) {
        aheadButton.style.display = "block";
        // goToMenuButton.style.display = "none";
        startAgainButton.style.display = "none";
    }

    x[myIndex - 1].style.display = "block";
}

function carouselAhead() {
    if (myIndex !== 0) {
        audios[myIndex - 1].pause();
        toggleOnEnd();
    }

    let i;
    let x = document.getElementsByClassName("container");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex++;

    if (myIndex > x.length) {
        myIndex = 1;
    }

    let behindButton = document.getElementById("behind");
    let aheadButton = document.getElementById("ahead");
    // let goToMenuButton = document.getElementById("goToMenu");
    let startAgainButton = document.getElementById("startAgain");

    if (myIndex === x.length) {
        // goToMenuButton.style.display = "block";
        startAgainButton.style.display = "block";
        aheadButton.style.display = "none";
        behindButton.style.display = "block";
    } else if (myIndex === 1) {
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

    x[myIndex - 1].style.display = "block";
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
            btn.classList.remove('active');
            audios[myIndex - 1].pause();
            playImgs[myIndex - 1].src = "resources/images/play.png";
            isPlaying = false;
        }
    }

    function startPlay() {
        e = e || window.event;
        let btn = e.target;

        if (audios[myIndex - 1].paused) {
            btn.classList.add('active');
            audios[myIndex - 1].play();
            playImgs[myIndex - 1].src = "resources/images/pause.png";
            isPlaying = true;
        }
    }

    function playHasEnded() {
        playImgs[myIndex - 1].src = "resources/images/play.png";
    }
}
