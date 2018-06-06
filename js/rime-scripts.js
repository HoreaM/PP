let myAudio = document.getElementById("cautati-rime");
myAudio.play();
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        myAudio.pause();
        myAudio.currentTime = 0;
    } else {
        myAudio.play();
    }
}

myAudio.onplaying = function () {
    isPlaying = true;
};

myAudio.onpause = function () {
    isPlaying = false;
};

let selected = 0;

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

let rimePosibile = ['r1', 'r2', 'r3', 'r4'];

function checkRima() {
    let selected = document.getElementsByClassName("selected");
    let corect = false;
    for (let i = 0; i < rimePosibile.length; i++) {
        if (hasClass(selected[0], rimePosibile[i]) && hasClass(selected[1], rimePosibile[i])) {
            corect = true;
        }
    }
    return corect;
}

function removeWrong() {
    let images = document.getElementsByClassName("wrong");
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('wrong');
    }
}

function toggleSelected(e) {
    e = e || window.event;
    let imagine = e.target;

    if (hasClass(imagine, 'selected')) {
        imagine.classList.remove('selected');
    }

    else {
        if (hasClass(imagine, 'stanga')) {
            let left_selected = document.getElementsByClassName("stanga selected");
            let left_nr = left_selected.length;
            if (left_nr !== 0) {
                for (let i = 0; i < left_nr; i++) {
                    left_selected[i].classList.remove('selected');
                }
            }
            imagine.classList.add('selected');
        }

        if (hasClass(imagine, 'dreapta')) {
            let right_selected = document.getElementsByClassName("dreapta selected");
            let right_nr = right_selected.length;
            if (right_nr !== 0) {
                for (let i = 0; i < right_nr; i++) {
                    right_selected[i].classList.remove('selected');
                }
            }
            imagine.classList.add('selected');

        }
        let selected = document.getElementsByClassName("selected");
        let selected_nr = selected.length;
        if (selected_nr === 2) {
            if (checkRima()) {
                for (let i = 0; i < selected_nr; i++) {
                    selected[0].classList.add('done');
                    selected[0].classList.remove('not-done');
                    selected[0].classList.remove('selected');
                }
                let not_done = document.getElementsByClassName("not-done");
                if (not_done.length !== 0) {
                    console.log('corect');
                    let audio_corect = document.getElementById("rima-corect");
                    audio_corect.play();

                }
                else {
                    console.log('castigat');
                    let audio_castigat = document.getElementById("rima-castigat");
                    audio_castigat.play();
                    felicitari();

                }
                //verifica daca castigat
                //daca castigat, play castigat
                //daca corect, play corect
            }
            else {
                for (let i = 0; i < selected_nr; i++) {
                    selected[0].classList.add('wrong');
                    selected[0].classList.remove('selected');
                    setTimeout(removeWrong, 2000);
                }
                console.log('gresit');
                let audio_gresit = document.getElementById("rima-gresit");
                audio_gresit.play();
            }
        }

    }
}


//modal
let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("close")[0];

function felicitari() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


let randRima = $(".randRima");
for(let i = 0; i < randRima.length; i++){
    let target = Math.floor(Math.random() * randRima.length -1) + 1;
    let target2 = Math.floor(Math.random() * randRima.length -1) +1;
    randRima.eq(target).before(randRima.eq(target2));
}