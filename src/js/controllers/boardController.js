import activateGame from './activateGameController';

export default class boardController {
    constructor(views){
        this.views = views;        
        this.update(views);
    }
    
    init(){
        let singleModeBtn = document.getElementById('single');
        let multiModeBtn = document.getElementById('multi');
        let modes = [singleModeBtn, multiModeBtn];

        this.changeBoardState();

        modes.forEach(mode => {
            mode.addEventListener('click', (e) => {
                this.startGame(e.target.id);
            });
        });
    }

    changeBoardState(){
        let board = document.getElementById('Board');
        let statusPanel = document.getElementById('StatusPanel');
        let scoreBoard = document.getElementById('ScoreBoard');
        let disableBoard = document.getElementById('DisableBoard');
        
        board.classList.add('u-hide');
        statusPanel.classList.add('u-hide');
        scoreBoard.classList.add('u-hide');
        disableBoard.classList.add('u-hide');
        
    }

    startGame(mode){
        let board = document.getElementById('Board');
        let starter = document.querySelector('#Game-starter');
        let statusPanel = document.getElementById('StatusPanel');
        let scoreBoard = document.getElementById('ScoreBoard');      
        
        
        starter.classList.add('u-hide');
        board.classList.remove('u-hide');
        statusPanel.classList.remove('u-hide');
        scoreBoard.classList.remove('u-hide');
        
        new activateGame(mode);
    }

    update(views){
        let board = document.querySelector('.app');
        if( typeof views !== 'string' ) {
            board.innerHTML = views.starter + views.statusPanel + views.board + views.scoreBoard + views.disableBoard;
            this.init();
        } 
        else {
            board.innerHTML = views;
        }
    }
}