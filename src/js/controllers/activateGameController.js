import boardController from '../';

export default class activeGameController {
    constructor(mode){
        this.mode = mode;

        this.init();

        this.clicked = [];
        this.xWins = 0;
        this.oWins = 0;
        this.counter = 1;
    }
    init(){
        let squares = document.getElementsByClassName("Square-container");
        // let restartBtn = document.getElementById('restart-btn');
        
        squares = [].slice.call(squares);   
        squares.forEach(square => {
            square.addEventListener('click', this.onClick.bind(this));
        });

        // restartBtn.addEventListener('click', location.reload.bind());


    }

    onClick(e){
        this.gameStarter(e);
    }

    gameStarter(e){
        let id = parseInt(e.target.id);
        let mode = this.mode;
       
        if(this.isClicked(id)) return;

        switch(mode){
            case 'single':
                this.singleMode(e);
                break;
            
            case 'multi':
                this.multiMode(e);
                break;

            default: 
                return;
        }
    }

    singleMode(e){
        let classList = e.target.classList;
        let square = e.target;
        let id = e.target.id;
        let counter = this.counter;

        square.innerHTML = 'X';
        classList.add('x');

        if(!this.didWin()){
            this.checkCounter();
            this.incrementCounter();
            this.disableBoard();            
            setTimeout(()=>{
                this.compMove();        
            },400)
        }
        else {
            this.updateScoreBoard('x');
            this.restartGame();
        }
    }

    multiMode(e){
        let classList = e.target.classList;
        let square = e.target;
        let id = e.target.id;
        let counter = this.counter;

        if(counter % 2 !== 0){
            square.innerHTML = 'x';
            classList.add('x');
            if(!this.didWin()){
                this.checkCounter();
                this.incrementCounter();
            }
            else {
                this.updateScoreBoard('x');
                this.restartGame();
            }
        }

        else {
            square.innerHTML = 'O';
            classList.add('o');
            if(!this.didWin()){
                this.checkCounter();
                this.incrementCounter();
            }
            else {
                this.updateScoreBoard('o');
                this.restartGame();
            }
        }
        
    }  
    
    compMove(){
        let id = Math.floor((Math.random() * 9) + 1);
        let square = document.getElementById(id);
        
        if(this.isClicked(id)){
            this.compMove();
        } else {
            square.innerHTML = 'O';
            square.classList.add('o');
            if(!this.didWin()){
                this.checkCounter();
                this.incrementCounter();
            }
            else {
                this.updateScoreBoard('o');
                this.restartGame();
            }
        }
    }

    isClicked(id){
        let clicked = this.clicked;
        
        if(clicked.indexOf(id) !== -1){
            return true;
        } else {
            clicked.push(id);
            return false;
        } 
    }

    checkCounter(){
        if(this.counter === 9) {
            console.log('Count: ', this.counter);

            let status = document.getElementById('StatusPanel');
            this.updateStatus("TIE!");
            this.restartGame();
            this.counter = 0;
        } else {
            return;
        }
    }

    incrementCounter(){
        this.counter++; 
    }

    updateStatus(msg) {
        let status = document.getElementById('status-message');

        switch(msg) {
            case 'TIE!': {
                setTimeout(()=>{
                    status.innerHTML = msg;
                },100);
                break;
            }

            case 'PLAY AGAIN': {
                setTimeout(()=>{
                    status.innerHTML = msg;
                },1500);
                break;
            }

            case 'X WON!': {
               setTimeout(()=>{
                    status.innerHTML = msg;
                },100);
                break;
            }

            case 'O WON!': {
                setTimeout(()=>{
                    status.innerHTML = msg;
                },100);
                break;
            }
        }  
    }

    updateScoreBoard(winner){
        let xWinsElement = document.getElementById('xWins');
        let oWinsElement = document.getElementById('oWins');

        if(winner === 'x') {
            xWinsElement.innerHTML = ++this.xWins;
        } 
        else if( winner === 'o') {   
            oWinsElement.innerHTML = ++this.oWins;
        } else {
            console.error('error in updatescore statement');
        }
    }


///////////////////////////////////////////////////////////

    restartGame(){
        this.clicked.length = 0;
        this.counter = 1;
        this.resetSquares();
    }

    resetSquares(){
        let Xs = document.getElementsByClassName('x');
        let Os = document.getElementsByClassName('o');
        
        Xs = [].slice.call(Xs);
        Os = [].slice.call(Os);
        
        setTimeout(() => {
            this.clearValues(Xs, Os);
            this.clearClasses(Xs, Os);
        }, 500);
    }

    clearValues(Xs, Os){
        Xs.forEach(square =>{
            square.innerHTML = "";
        });
        Os.forEach(square =>{
            square.innerHTML = "";
        });
    }

    clearClasses(Xs, Os){
        Xs.forEach(square =>{
            square.classList.remove('x');
        });
        Os.forEach(square =>{
            square.classList.remove('o');
        });
    }
    
///////////////////////////////////////////////////////////////

    didWin(){
        let winnings = [ [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];

        let slot1 = document.getElementById('1').classList;
        let slot2 = document.getElementById('2').classList;
        let slot3 = document.getElementById('3').classList;
        let slot4 = document.getElementById('4').classList;
        let slot5 = document.getElementById('5').classList;
        let slot6 = document.getElementById('6').classList;
        let slot7 = document.getElementById('7').classList;
        let slot8 = document.getElementById('8').classList;
        let slot9 = document.getElementById('9').classList;

        var slots = [slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9]

        if ( slot1.contains('x') && slot2.contains('x') && slot3.contains('x') ||
             slot4.contains('x') && slot5.contains('x') && slot6.contains('x') ||
             slot7.contains('x') && slot8.contains('x') && slot9.contains('x') ||
             slot1.contains('x') && slot4.contains('x') && slot7.contains('x') ||
             slot2.contains('x') && slot5.contains('x') && slot8.contains('x') ||
             slot3.contains('x') && slot6.contains('x') && slot9.contains('x') ||
             slot1.contains('x') && slot5.contains('x') && slot9.contains('x') ||
             slot3.contains('x') && slot5.contains('x') && slot7.contains('x') ) {
                this.disableBoard();
                this.updateStatus('X WON!');                                                
                return true;     
             }
        
        else if ( slot1.contains('o') && slot2.contains('o') && slot3.contains('o') ||
             slot4.contains('o') && slot5.contains('o') && slot6.contains('o') ||
             slot7.contains('o') && slot8.contains('o') && slot9.contains('o') ||
             slot1.contains('o') && slot4.contains('o') && slot7.contains('o') ||
             slot2.contains('o') && slot5.contains('o') && slot8.contains('o') ||
             slot3.contains('o') && slot6.contains('o') && slot9.contains('o') ||
             slot1.contains('o') && slot5.contains('o') && slot9.contains('o') ||
             slot3.contains('o') && slot5.contains('o') && slot7.contains('o') ) {
                this.disableBoard();
                this.updateStatus('O WON!');
                return true;
             }

        else {
            return false;
        }
    }

    disableBoard(){
        let disableBoard = document.getElementById('DisableBoard');
        disableBoard.classList.remove('u-hide');

        setTimeout(()=>{
            disableBoard.classList.add('u-hide');
        },500);
    } //I also tried doing it with removeEventListner()
}