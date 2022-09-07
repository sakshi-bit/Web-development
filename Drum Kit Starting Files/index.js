
//detecting button press
var numberOfDrums=document.querySelectorAll(".drum").length;

for(var i = 0;i<numberOfDrums;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function() {

    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);

});
}

//detecting keyboard press
document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "d":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;

        case "j":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;

        case "k":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;

        case "l":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;

        
    
        default: console.log(buttonInnerHtml);
            
    }
}

 // alert("I got clicked!");
//  var audio = new Audio("sounds/tom-1.mp3");
//  audio.play();

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
    activeButton.classList.remove("pressed");
},100);
}