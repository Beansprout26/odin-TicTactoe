

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

                    if(!gameLogic.winner()){
                        gameBoard.nextTurn(); // Switch turn
                    }
                    
                    
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


                    if(!gameLogic.winner()){
                        gameBoard.nextTurn(); // Switch turn
                    }
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





const squares = document.querySelectorAll('.square');

//object for all winning patterns and will include winning logic
const gameLogic = {

    winningPatterns: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [6,4,2],
        [0,4,8]
    ],

    
    winner: function(currentPlayer){
        for(let i = 0; i < this.winningPatterns.length; i++){
            const [a,b,c] = this.winningPatterns[i];
            if(squares[a].textContent === gameBoard.currentPlayer.marker && squares[b].textContent === gameBoard.currentPlayer.marker && squares[c].textContent === gameBoard.currentPlayer.marker){
                console.log(`${gameBoard.currentPlayer.name} is the winner!`);
                return true;
                
            }
            
        }
        return false;
    }};



// const gameBoard = document.getElementsByClassName('.gameContainer');

