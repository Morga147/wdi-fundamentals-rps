////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if ((playerMove === 'rock' && computerMove === 'scissors')
        || (playerMove === 'paper' && computerMove === 'rock') 
        || (playerMove === 'scissors' && computerMove === 'paper')) {
        winner = 'player';
    } else if ((playerMove === 'rock' && computerMove === 'paper') 
        || (playerMove === 'paper' && computerMove === 'scissors') 
        || (playerMove === 'scissors' && computerMove === 'rock')) {
        winner = 'computer';
    } else  {
        winner = 'tie';
    }
    return winner;
}

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */ 
    var end = getWinner(playerMove,computerMove);
    while (playerWins < 5 && computerWins < 5) {
        if (end === 'player') {
            playerWins += 1;
        } else if (end === 'computer') {
            computerWins += 1;
        } 
    }
    console.log('Player has won ' + playerWins + ' games.');
    console.log('Computer has won ' + computerWins + ' games.');

    if(playerWins === 5) {
        console.log('Congratulations! You won!');
    } else if (computerWins === 5) {
        console.log('Computer won. Sorry, play again.');
    } else {
        console.log('Keep playing.');
    }
    return [playerWins, computerWins];
}

