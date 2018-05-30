let myAudio = document.getElementById("cautati-rime");
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        myAudio.pause()
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

            let selected = document.getElementsByClassName("selected");
            let selected_nr = selected.length;
            if (selected_nr === 2) {
                if (checkRima()) {
                    //fa-le done
                    //scoate selected
                    //verifica daca castigat
                    //daca castigat, play castigat
                    //daca corect, play corect
                }
                else {
                    //scoate done si selected
                    //play gresit
                }
            }

        }

    }
}