// WE want some event listeners too 

/**
 * Dom content loaded  listener, this sets up game on start
 */
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
                // run our game
                runGame(gameType)

            };
        });
    };
});

// button event listeners

// We will need some functions to get our code to run


/**
 * The main game "loop", we call this when script loads and 
 * after every answer is processed
 */
function runGame(gameType) {
    // now we get our numbers
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else {
        alert(`Unknown game type: ${gameType}`)
        throw `Unknown game type: ${gameType}. Aborting!`
    }   
}

// chaeck answer function

function checkAnswer() {

}

/**
 * Gets the operands and the operator, directly from the dom and returns the correct answer for comparison
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

// increment score

function incrementScore() {

}

// increment wrong answer

function incrementWrongAnswer() {

}

/**
 * Displays an addition question
 * @param {*} operand1 -> first number randomly generated on run game
 * @param {*} operand2 -> second number randomly generated on run game
 */
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractionQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

function displayDivideQuestion() {
    
}