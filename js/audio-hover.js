function PlaySound(soundobj) {
    // console.log("test");
    let thissound = document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    let thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}