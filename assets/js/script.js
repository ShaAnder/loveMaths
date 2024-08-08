// WE want some event listeners too 

// Dom content loaded listener
document.addEventListener("DOMContentLoaded", function() {
    // get all our buttons
    let buttons = document.getElementsByTagName("button");
    // iterate through the buttons
    for (let button of buttons) {
        button.addEventListener("click", function() {
            // check the buttons data type
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);

            };
        });
    };
});

// button event listeners

// We will need some functions to get our code to run

// run game function

function runGame() {

}

// chaeck answer function

function checkAnswer() {

}

// calculate correct answer

function calculateCorrectAnswer() {

}

// increment score

function incrementScore() {

}

// increment wrong answer

function incrementWrongAnswer() {

}

// display questions

function displayAdditionQuestion() {

}

function displaySubtractionQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

function displayDivideQuestion() {
    
}