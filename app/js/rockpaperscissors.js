////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

    var playerMove = getPlayerMove();
	var computerMove = getComputerMove();

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    if (playerMove === 'rock')  {
        if (computerMove === 'scissors') {
            winner = 'Player';
            console.log ('Player Wins!');
        }
        else if (computerMove === 'paper') {
            winner = 'Computer';
            console.log ('Computer Wins!');

        }
        else if (playerMove === computerMove) {
            winner = 'Tie'
            console.log ('Round is a Tie');
        }
     }
     else if (playerMove === 'paper') {
         if (computerMove === 'rock') {
             winner = 'Player';
             console.log ('Player Wins!');
         }
         else if (computerMove === 'scissors') {
            winner = 'Computer';
            console.log ('Computer Wins!');
         }
         else if (playerMove === computerMove) {
            winner = 'Tie'
            console.log ('Round is a Tie');
        }
     }
     else if (playerMove === 'scissors') {
         if (computerMove === 'paper') {
             winner = 'Player';
             console.log ('Player Wins!');
         }
         else if (computerMove === 'rock') {
             winner = 'Computer';
             console.log ('Computer Wins!');
         }
         else if (playerMove === computerMove) {
            winner = 'Tie'
            console.log ('Round is a Tie');
        }
     }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var winner = getWinner(playerMove,computerMove);
    while (playerWins < 5 && computerWins < 5) {
        if (winner === "Player") {
            playerWins += 1;
        }
        else if (winner === "Computer") {
            computerWins += 1;
        }
        console.log("You chose '" + playerMove + "' while the computer chose '" + computerMove + "'.");
        console.log("Winner is: " + winner + "!");
        console.log("The score is currently " + playerWins + " to " + computerWins + ".\n");
        getInput();
        randomPlay();
    return [playerWins, computerWins];
    }
}
playToFive();
