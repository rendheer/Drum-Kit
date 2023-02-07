
// document.querySelector("button").addEventListener("click", handleClick);
// Capture button click on web page
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    
}

function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);
    play(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    // playAudio("crash.mp3");
    // console.log(this.innerHTML);
    // this.style.color = "white";
    // this.getElementByC
    // this.innerHTML.style.color = "#fff";
    // alert("I got clicked!");
    // playAudio();

}


// Function to trigger sound based on button or key press
function play(event) {
    switch (event) {
        case "w" :
            playAudio("crash.mp3");
            break;
        case "a" :
            playAudio("kick-bass.mp3");
            break;
        case "s" :
            playAudio("snare.mp3");
            break;
        case "d" :
            playAudio("tom-1.mp3");
            break;
        case "j" :
            playAudio("tom-2.mp3");
            break;
        case "k" :
            playAudio("tom-3.mp3");
            break;
        case "l" :
            playAudio("tom-4.mp3");
            break;
        default:
            console.log(event);
    }
}


// Function to select the right audio to play
function playAudio(soundFile) {
    pathToSoundFile = "sounds/" + soundFile;
    var audio = new Audio(pathToSoundFile);
    audio.play();
}

// Capture keyboard stokes
// The function below has a callback function(event)
// The event in the function below is the keydown event which identifies which key was pressed and is only available for this moment when the event happened
document.addEventListener("keydown", function(event) {
    // console.log(event.key);
    play(event.key);
    // alert ("Key was pressed");
    buttonAnimation(event.key);
}); 

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout( function() {
        activeButton.classList.remove("pressed");
    }, 100
    );
}