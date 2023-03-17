const images = 77;
let i = 0;
let seconds = 4; // Change image every x seconds
let run = true;

const img = document.querySelector("img");

carousel();

document.addEventListener("keydown", (event) =>{
    if(event.key > 0 && event.key < 10){
        seconds = event.key;
        if(!run){
            run = true;
            carousel();
        }
    }
    else if(event.key == 0){
        run = false;
    }
});

function carousel() {
    if (i < images) {
        i++;
    }
    else{
        i = 1;
    }
    img.src = `./images/leia (${i}).JPG`;
    if(run) setTimeout(carousel, seconds * 1000); 
}