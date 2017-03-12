let id = 1;

export let starter = `
    <div id="Game-starter">
        <h2>Choose Game Mode:</h2>
        <div>
            <button id="single"> Single Player </button>
            <button id="multi"> Multi Player </button>        
        </div>
    </div>
`
 export let board = `
    <div id="Board">;
            <div class="u-flexRow">
                <div class="Square-container" id=${id++}></div>
                <div class="Square-container" id=${id++}></div>
                <div class="Square-container" id=${id++}></div>
            </div>

            <div class="u-flexRow">
                <div class="Square-container" id=${id++}></div>
                <div class="Square-container" id=${id++}></div>
                <div class="Square-container" id=${id++}></div>
            </div>

            <div class="u-flexRow">
                <div class="Square-container" id=${id++}></div>
                <div class="Square-container" id=${id++}></div>
                <div class="Square-container" id=${id++}></div>
            </div>        
    </div>
`;

export let scoreBoard = `
    <div id="ScoreBoard" class="u-flexRow">
        <div class="ScoreBoard-container u-block" style="width:50%">
            <h2 class="ScoreBoard-container-keys">X:</h2>
            <h2 class="ScoreBoard-container-values" id="xWins">0</h2>
        </div>
        <div class="ScoreBoard-container u-block" style="width:50%">
            <h2 class="ScoreBoard-container-keys">O:</h2>
            <h2 class="ScoreBoard-container-values" id="oWins">0</h2>
        </div>
    </div>
`;

export let statusPanel = `
    <div id="StatusPanel">
        <div class="u-inlineBlock StatusPanel-restart">
            <span class="u-inlineBlock" id="restart-btn" onclick=location.reload()>restart</span>        
        </div>
        <div class="u-inlineBlock">
            <span id='status-message'>YOUR MOVE</span>
        </div>
    </div>
`;

export let disableBoard = `
    <div id="DisableBoard">
    
    </div>
`;

