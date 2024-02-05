// 1. Deposit some money
// 2. Determine number of lines to bet on 
// 3. collect a bet amount
// 4. check if the user won 

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");       // This code checks if the Deposited amount is correct.
        const numberDepositAmount = parseFloat(depositAmount);
    
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit Amount, try again.")
        } else {
        return numberDepositAmount;
        }
    
    }

};

const getNumberOfLines = () => {

    while (true) {
        const lines = prompt("Enter the number of line to bet on (1-3): ");       // Code checks if You placed the correct Number of lines you want to play 
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again.")
        } else {
        return numberOfLines;
        }
    
    }

}

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total bet per line: ");      //checks if the amount you placed based on your selected
        const numberBet = parseFloat(bet);                         //number of lines is correct . 
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.")
        }
        return numberBet;
    
    }

}

let balance = deposit();
const numberOfLines = getNumberOfLines();          //calling all the funtions so that they can opperate
const bet = getBet(balance, numberOfLines);

