const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'bomb' || userInput === 'rock' || userInput === 'paper' || userInput === 'pencil' || userInput === 'scissor') {
        return userInput;
    } else {
        console.log('Error, please type: rock, paper or scissors.')
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 4)
    switch (randomNumber) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'pencil'
        case 3:
            return 'scissor'
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'Oh! Thats\'s a secret cheat code! You won definitely!!'
    }
    if (userChoice === computerChoice) {
        return 'Game is a tie'
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'scissor' || computerChoice === 'pencil') {
            return 'User Won'
        } else {
            return 'Computer won'
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'pencil' || computerChoice === 'scissor') {
            return 'Computer won'
        } else {
            return 'User won'
        }
    }

    if (userChoice === 'pencil') {
        if (computerChoice === 'rock' || computerChoice === 'scissor') {
            return 'Computer Won'
        } else {
            return 'User won'
        }
    }

    if (userChoice === 'scissor') {
        if (computerChoice === 'paper' || computerChoice === 'pencil') {
            return 'User Won'
        } else {
            return 'Computer Won'
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice('bomb')
    const computerChoice = getComputerChoice()
    console.log(`"You threw: ${userChoice}." "The computer threw: ${computerChoice}."`)
    // console.log(`The computer threw: ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()