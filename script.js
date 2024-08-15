

const playerOne = {
    name: 'Player One',
    marker: "X",

    //here I will add logic to handle this players click events, styling colors and point tally.
    playerOneTurn: function() {
        document.querySelectorAll('.square').forEach(square => {
            square.addEventListener('click', () => {
                if (!square.textContent && gameBoard.currentPlayer === playerOne) {
                    square.textContent = this.marker;
                    console.log(this.marker);

                    square.setAttribute('style', 'box-shadow: 5px 5px 25px rgb(245, 100, 194),-5px -5px 25px rgb(245, 100, 194);');
                    square.style.color = 'rgb(245, 100, 194)';
                    square.style.justifyContent = 'center';
                    square.style.alignItems = 'center';
                    square.style.fontSize = '5rem';

                    gameBoard.nextTurn(); // Switch turn
                    gameLogic.winner();
                }
            });
        });
    }
};




const playerTwo = {
    name: "Player Two",
    marker: "O",
    //here I will add logic to handle this players click events, styling colors and point tally.
    playerTwoTurn: function() {
        document.querySelectorAll('.square').forEach(square => {
            square.addEventListener('click', () => {
                if (!square.textContent && gameBoard.currentPlayer === playerTwo) {
                    square.textContent = this.marker;
                    console.log(this.marker);

                    square.setAttribute('style', 'box-shadow: 5px 5px 25px rgb(107, 253, 255),-5px -5px 25px rgb(107, 253, 255);');
                    square.style.color = 'rgb(107, 253, 255)';
                    square.style.justifyContent = 'center';
                    square.style.alignItems = 'center';
                    square.style.fontSize = '5rem';


                    gameBoard.nextTurn();
                    gameLogic.winner();
                }
            });
        });
    }
};


//handle turns and defining player moves
const gameBoard = {
    game: [],
    currentPlayer: playerTwo,

    nextTurn: function() {
        if (this.currentPlayer === playerOne) {
            this.currentPlayer = playerTwo;
            this.currentPlayer.playerTwoTurn();
        } else {
            this.currentPlayer = playerOne;
            this.currentPlayer.playerOneTurn();
        }
    }
};
gameBoard.nextTurn();







//object for all winning patterns and will include winning logic
const gameLogic = {

    winningPatterns: [
        [1,2,3],
        [1,4,7],
        [4,5,6],
        [7,8,9],
        [2,5,8],
        [3,6,9],
        [3,5,7],
        [1,5,9]
    ],

    winner: function(){
        if(playerOne.marker === this.winningPatterns){
            console.log('Winner playerOne');
        }else if(playerTwo.marker === this.winningPatterns){
            console.log('Winner playerTwo');
        }
    }

}; gameLogic.winner();



// const gameBoard = document.getElementsByClassName('.gameContainer');

