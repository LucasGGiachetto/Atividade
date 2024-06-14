const boardElement = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameActive = true;

boardElement.addEventListener('click', event => {
    const clickedCell = event.target;
    if (clickedCell.classList.contains('cell') && gameActive && !clickedCell.textContent) {
        clickedCell.textContent = currentPlayer;
        if (checkWin()) {
            alert(currentPlayer + ' ganhou!');
            gameActive = false;
        } else if (checkDraw()) {
            alert('Empate!');
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
});

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winConditions.some(condition => {
        const [a, b, c] = condition;
        return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.textContent);
}