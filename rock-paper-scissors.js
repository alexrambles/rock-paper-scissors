const getUserChoice = function(userInput) {
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors') {
    return userInput;
  } else {
    console.log('invalid input');
  }
}

const getComputerChoice = function() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'game is tied';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Wins!';
    }
    if (computerChoice === 'scissors') {
      return 'You Win!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You Win!';
    }
    if (computerChoice === 'scissors') {
      return 'Computer Wins!';
    }
  }

  if (userChoice ==='scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Wins!';
    }
    if (computerChoice === 'paper') {
      return 'You Win!';
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('Scissors');
    console.log('You pulled ' + userChoice + '.');
  const computerChoice = getComputerChoice();
    console.log('The computer pulled ' + computerChoice + '.');
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();
