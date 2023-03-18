const images = 77;
let i = 0;
let seconds = 4; // Change image every x seconds
let run = true;

const img = document.querySelector("img");

carousel();

document.addEventListener("keydown", (event) => {
    // console.log(event.key)

    if (event.key > 0 && event.key < 10) {
        seconds = event.key;
        if (!run) {
            run = true;
            carousel();
        }
    }
    else if (event.key == 0 || event.key == " ") {
        if (run) run = false;
        else {
            run = true;
            carousel();
        }
    }
    else if (event.key == "ArrowLeft") {
        if (i > 1) {
            i--;
        }
        else {
            i = images;
        }
        displayImage(i);
    }
    else if (event.key == "ArrowRight") {
        if (i < images) {
            i++;
        }
        else {
            i = 1;
        }
        displayImage(i);
    }
});

function carousel() {
    if (i < images) {
        i++;
    }
    else {
        i = 1;
    }
    displayImage(i);
    if (run) setTimeout(carousel, seconds * 1000);
}

function displayImage(i) {
    img.src = `./images/leia (${i}).JPG`;
}