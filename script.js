let player = (name, symbol) => {
    return {name, symbol};
}

const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", "", ""];

    playerOne = player("Player One", "X");
    playerTwo = player("Player Two", "O");
    currentPlayer = playerOne;

    let square = document.querySelectorAll(".square");
    square.forEach((square) => {
        square.addEventListener("click", () => {
            play(square);
        });
    });

    const play = (square) => {
        board.splice(square.id, 1, player.symbol);
        square.textContent = currentPlayer.symbol;
        changeTurn();
    };

    const changeTurn = () => {
        if (currentPlayer === playerOne) {
            currentPlayer = playerTwo;
        }
        else if (currentPlayer === playerTwo) {
            currentPlayer = playerOne;
        }
    };

})();