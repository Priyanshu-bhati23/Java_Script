const prompt = require("prompt-sync")(); // to get user input
const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
};

const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
};

// Deposit money
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount. Please try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

// Get number of lines to bet on
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseInt(lines);

        if (isNaN(numberOfLines) || numberOfLines < 1 || numberOfLines > 3) {
            console.log("Invalid input. Please enter a number between 1 and 3.");
        } else {
            return numberOfLines;
        }
    }
};

// Get bet per line
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt(`Enter the bet amount per line (Balance: ${balance}): `);
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet amount. Please try again.");
        } else {
            return numberBet;
        }
    }
};

// Spin the slot machine
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];

        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

// Transpose reels to rows
const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
};

// Print rows
const printRows = (rows) => {
    for (const row of rows) {
        console.log(row.join(" | "));
    }
};

// Calculate winnings
const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol !== symbols[0]) {
                allSame = false;
                break;
            }
        }

        if (allSame) {
            winnings += bet * SYMBOLS_VALUES[symbols[0]];
        }
    }
    return winnings;
};

// Main game loop
const game = () => {
    let balance = deposit();

    while (true) {
        console.log(`Your balance is: ${balance}`);
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);

        balance -= bet * numberOfLines;
        const reels = spin();
        const rows = transpose(reels);

        console.log("Slot Machine:");
        printRows(rows);

        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;

        console.log(`You won: ${winnings}`);
        console.log(`Your new balance is: ${balance}`);

        if (balance <= 0) {
            console.log("You ran out of money! Game over.");
            break;
        }

        const playAgain = prompt("Do you want to play again? (y/n): ");
        if (playAgain.toLowerCase() !== "y") {
            console.log("Thanks for playing!");
            break;
        }
    }
};

game();
