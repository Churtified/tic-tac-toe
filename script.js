const gameBoardContainer = document.querySelector('.gameBoard-container');

const gameBoardModule = (() => {
    let gameBoard = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];
    return {gameBoard};
})();

renderBoard();

function renderBoard() {
    for (let i = 0; i < 9; i++) {
        const gameBoardBox = document.getElementById("square" + i);
        gameBoardBox.setAttribute("value", gameBoardModule.gameBoard[i]);
        gameBoardBox.textContent += gameBoardModule.gameBoard[i];
    }
}

// const gameBoardBox = document.createElement('div');
// gameBoardBox.classList.add('gameBoardBox');
// gameBoardBox.textContent = gameBoardModule;

// gameBoardContainer.appendChild(gameBoardBox);

let player1 = PlayerMaker("Player 1", "X");
let player2 = PlayerMaker("Player 2", "O");

const PlayerMaker = (playerName, playerMark) => {
    return {playerName, playerMark};
};

const displayController = (() => {
    
})();