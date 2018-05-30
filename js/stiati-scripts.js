var timer;
var percent = 0;
var audios = document.getElementsByClassName("audio");
var playImgs = document.getElementsByClassName("playImage");

var myIndex = 0;
carouselAhead();

for (i=0; i < audios.length; i++) {
    audios[i].oneneded = playHasEnded();
}

function carouselBehind() {
    var i;
    var x = document.getElementsByClassName("container");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex--;

    if (myIndex == 0) {
        myIndex = x.length - 1;
    }

    var behindButton = document.getElementById("behind");
    var aheadButton = document.getElementById("ahead");
    var goToMenuButton = document.getElementById("goToMenu");
    var startAgainButton = document.getElementById("startAgain");

    if (myIndex == 1) {
        behindButton.style.display = "none";
    } else {
        behindButton.style.display = "block";
    }

    if (myIndex != x.length) {
        aheadButton.style.display = "block";
        goToMenuButton.style.display = "none";
        startAgainButton.style.display = "none";
    }

    x[myIndex - 1].style.display = "block";
}

function carouselAhead() {
    var i;
    var x = document.getElementsByClassName("container");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex++;

    if (myIndex > x.length) {
        myIndex = 1;
    }

    var behindButton = document.getElementById("behind");
    var aheadButton = document.getElementById("ahead");
    var goToMenuButton = document.getElementById("goToMenu");
    var startAgainButton = document.getElementById("startAgain");

    if (myIndex == x.length) {
        goToMenuButton.style.display = "block";
        startAgainButton.style.display = "block";
        aheadButton.style.display = "none";
        behindButton.style.display = "block";
    } else if (myIndex == 1) {
        goToMenuButton.style.display = "none";
        startAgainButton.style.display = "none";
        aheadButton.style.display = "block";
        behindButton.style.display = "none";
    } else {
        goToMenuButton.style.display = "none";
        startAgainButton.style.display = "none";
        aheadButton.style.display = "block";
        behindButton.style.display = "block";
    }

    x[myIndex - 1].style.display = "block";
}

audio.addEventListener("playing", function(_event) {
    var duration = _event.target.duration;
    advance(duration, audio);
});

audio.addEventListener("pause", function(_event) {
    clearTimeout(timer);
});

var startTimer = function(duration, element){
    if(percent < 100) {
        timer = setTimeout(function (){advance(duration, element)}, 100);
    }
}

function togglePlay (e) {
    e = e || window.event;
    var btn = e.target;

    if (!audios[myIndex-1].paused) {
        btn.classList.remove('active');
        audios[myIndex-1].pause();
        playImgs[myIndex-1].src = "resources/images/play.png";
        isPlaying = false;

    } else {
        btn.classList.add('active');
        audios[myIndex-1].play();
        playImgs[myIndex-1].src = "resources/images/pause.png";
        isPlaying = true;
    }

    function pausePlay() {
        e = e || window.event;
        var btn = e.target;

        if (!audios[myIndex-1].paused) {
            btn.classList.remove('active');
            audios[myIndex-1].pause();
            playImgs[myIndex-1].src = "resources/images/play.png";
            isPlaying = false;
        }
    }

    function startPlay() {
        e = e || window.event;
        var btn = e.target;

        if (audios[myIndex-1].paused) {
            btn.classList.add('active');
            audios[myIndex-1].play();
            playImgs[myIndex-1].src = "resources/images/pause.png";
            isPlaying = true;
        }
    }

    function playHasEnded() {
        playImgs[myIndex-1].src = "resources/images/play.png";
    }
}
