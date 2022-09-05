let player = (name, symbol) => {
    return {name, symbol};
}

const displayPlayers = (() => {
    let playerOne = document.getElementById("playerOne");
    let playerTwo = document.getElementById("playerTwo");
    return {playerOne, playerTwo};
})();

const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", "", ""];

    let square = document.querySelectorAll(".square");

    let editPlayersButton = document.querySelector(".editPlayersButton");
    let modal = document.querySelector(".modal");
    let close = document.querySelector(".close");
    let submit = document.querySelector(".button1");

    let winner = document.querySelector(".winnerText");

    let restartButton = document.querySelector(".restartButton");

    restartButton.addEventListener("click", restartGame);

    function restartGame() {
        gameBoard.board = ["", "", "", "", "", "", "", "", "", ""];
        winner.textContent = "";

        square.forEach((square) => {
            square.textContent = "";
        });
    }

    playerOne = player("Player One", "X");
    playerTwo = player("Player Two", "O");
    currentPlayer = playerOne;

    // function changeNames() {
    //     let playerOneName = document.getElementById("playerOneName").value;
    //     let playerTwoName = document.getElementById("playerTwoName").value;
    //     displayPlayers.playerOne.textContent = `${playerOneName}`;
    //     displayPlayers.playerTwo.textContent = `${playerTwoName}`;
    //     playerOne.name = playerOneName;
    //     playerTwo.name = playerTwoName;
    //     return playerOne, playerOneName, playerTwo, playerTwoName;
    // }

    // submit.addEventListener("click", changeNames);

    // editPlayersButton.addEventListener("click", showModal);
    // close.addEventListener("click", showModal);
    // window.addEventListener("click", windowOnClick);


    // function showModal() {
    //     modal.classList.toggle("showModal");
    // }

    // function windowOnClick(event) {
    //     if (event.target === modal) {
    //         showModal();
    //     }
    //     if (event.target === submit) {
    //         showModal();
    //     }
    // }

    square.forEach((square) => {
        square.addEventListener("click", () => {
            if (square.textContent === "") {
                play(square);
            }
        });
    });

    const play = (square) => {
        board.splice(square.id, 1, currentPlayer.symbol);
        square.textContent = currentPlayer.symbol;
        if (checkWinner()) {
            winner.textContent = `${currentPlayer.name} is the winner!`
            console.log(`${currentPlayer.name} is the winner!`)
        }
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

    let checkWinner = () => {
        if (
            (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
            (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
            (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
            (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
            (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
            (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
            (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
            (board[2] === "X" && board[4] === "X" && board[5] === "X")
        ) {
            return true, currentPlayer;
        }
        else if (
            (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
            (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
            (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
            (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
            (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
            (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
            (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
            (board[2] === "O" && board[4] === "O" && board[5] === "O")
        ) {
            return true, currentPlayer;
        }
        else if (
            (board[0] === "X" || board[0] === "O") &&
            (board[1] === "X" || board[1] === "O") &&
            (board[2] === "X" || board[2] === "O") &&
            (board[3] === "X" || board[3] === "O") &&
            (board[4] === "X" || board[4] === "O") &&
            (board[5] === "X" || board[5] === "O") &&
            (board[6] === "X" || board[6] === "O") &&
            (board[7] === "X" || board[7] === "O") &&
            (board[8] === "X" || board[8] === "O")
        ) {
            console.log("It's a draw!");
            winner.textContent = "It's a draw";
        }
    };
    

    return {
        board,
        checkWinner,
    }
})();