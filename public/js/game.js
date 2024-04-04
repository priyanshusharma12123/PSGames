var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userCLickedPattern = [];

var started = false;

var lvl = 0;

$(document).keypress(function() {
    if(!started){
        $("#level-title").text("Level " + lvl);
        nextSequence();
        started = true;
    }
})

$(".btn").click(function(){
    
    var userChosenColour = $(this).attr("id");

    userCLickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userCLickedPattern.length - 1);
});

function checkAnswer(currentLevel){

    if (gamePattern[currentLevel] === userCLickedPattern[currentLevel]) {

        console.log("Success");

        if(userCLickedPattern.length === gamePattern.length){

            setTimeout(function() {
                nextSequence();
            },1000);
        }
    } else {

        playSound("wrong");
        
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    
}

function startOver(){
    lvl = 0;
    gamePattern = [];
    started = false;
}


function nextSequence(){

    userCLickedPattern = [];

    lvl++;

    $("#level-title").text("Level " + lvl);

    var randNumber = Math.random() * 4;
    var randomNumber = Math.floor(randNumber);
 
    
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);    

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);

}

function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColor) {
    
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    },100);
}