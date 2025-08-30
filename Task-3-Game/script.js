const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Empty board
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleClick(index) {
    if (gameBoard[index] !== '' || !gameActive) return; // Prevent clicking on already filled cells or after game ends
    gameBoard[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    checkWinner();
    if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
        status.textContent = `${currentPlayer}'s Turn`;
    }
}

function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            status.textContent = `${gameBoard[a]} Wins!`;
            return;
        }
    }
    if (!gameBoard.includes('')) {
        gameActive = false;
        status.textContent = 'It\'s a Draw!';
    }
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
    gameActive = true;
    currentPlayer = 'X';
    status.textContent = `${currentPlayer}'s Turn`;
}

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleClick(index));
});

resetBtn.addEventListener('click', resetGame);
