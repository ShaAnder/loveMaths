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
                // check our answer
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                // run our game
                runGame(gameType)

            };
        });
    };

    // ux allow user to use enter keys
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if(event.key === "Enter") {
            checkAnswer();
        }
    })

    // runs default game addition
    runGame("addition")
});

// button event listeners

// We will need some functions to get our code to run


/**
 * The main game "loop", we call this when script loads and 
 * after every answer is processed
 */
function runGame(gameType) {

    // ux - remove the text from box on submit
    document.getElementById("answer-box").value = "";

    // ux - set focus for user experience
    document.getElementById("answer-box").focus();


    // now we get our numbers
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    // check gametype, setup the game screen as shown
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractionQuestion(num1, num2);
    } else if (gameType === "division") {
    displayDivisionQuestion(num1, num2);

    } else {
        alert(`Unknown game type: ${gameType}`)
        throw `Unknown game type: ${gameType}. Aborting!`
    }   
}

/**
 * checks the user answer based off of the correct calculation
 */
function checkAnswer() {

    // get our user score, calculated answer and then our is correct bool
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        // throw alert to tell user correct
        alert("Correct!");
        incrementScore()
    } else {
        // throw an alert to tell user wrong answer
        alert(`You answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer()
    }

    // run the game
    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands and the operator, directly from the dom and returns the correct answer for comparison
 */
function calculateCorrectAnswer() {

    // get our operands inner text
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    // run a check to see what the operand is
    if (operator === "+") {
        // return our correct answer and type as an array]
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "/") {
        return [operand1 - operand2, "divide"];
    } else {
        // throw an alert / error to stop game
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    // get the element from the dom, then increment it with the old score + 1
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    // get the element from the dom, then increment it with the old score + 1
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
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

function displaySubtractionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";

}