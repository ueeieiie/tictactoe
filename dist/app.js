/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _activateGameController = __webpack_require__(4);

var _activateGameController2 = _interopRequireDefault(_activateGameController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var boardController = function () {
    function boardController(views) {
        _classCallCheck(this, boardController);

        this.views = views;
        this.update(views);
    }

    _createClass(boardController, [{
        key: 'init',
        value: function init() {
            var _this = this;

            var singleModeBtn = document.getElementById('single');
            var multiModeBtn = document.getElementById('multi');
            var modes = [singleModeBtn, multiModeBtn];

            this.changeBoardState();

            modes.forEach(function (mode) {
                mode.addEventListener('click', function (e) {
                    _this.startGame(e.target.id);
                });
            });
        }
    }, {
        key: 'changeBoardState',
        value: function changeBoardState() {
            var board = document.getElementById('Board');
            var statusPanel = document.getElementById('StatusPanel');
            var scoreBoard = document.getElementById('ScoreBoard');
            var disableBoard = document.getElementById('DisableBoard');

            board.classList.add('u-hide');
            statusPanel.classList.add('u-hide');
            scoreBoard.classList.add('u-hide');
            disableBoard.classList.add('u-hide');
        }
    }, {
        key: 'startGame',
        value: function startGame(mode) {
            var board = document.getElementById('Board');
            var starter = document.querySelector('#Game-starter');
            var statusPanel = document.getElementById('StatusPanel');
            var scoreBoard = document.getElementById('ScoreBoard');

            starter.classList.add('u-hide');
            board.classList.remove('u-hide');
            statusPanel.classList.remove('u-hide');
            scoreBoard.classList.remove('u-hide');

            new _activateGameController2.default(mode);
        }
    }, {
        key: 'update',
        value: function update(views) {
            var board = document.querySelector('.app');
            if (typeof views !== 'string') {
                board.innerHTML = views.starter + views.statusPanel + views.board + views.scoreBoard + views.disableBoard;
                this.init();
            } else {
                board.innerHTML = views;
            }
        }
    }]);

    return boardController;
}();

exports.default = boardController;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _styles = __webpack_require__(3);

var _styles2 = _interopRequireDefault(_styles);

var _templates = __webpack_require__(2);

var _boardController = __webpack_require__(0);

var _boardController2 = _interopRequireDefault(_boardController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var views = { starter: _templates.starter, board: _templates.board, scoreBoard: _templates.scoreBoard, statusPanel: _templates.statusPanel, disableBoard: _templates.disableBoard };
var app = new _boardController2.default(views);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var id = 1;

var starter = exports.starter = "\n    <div id=\"Game-starter\">\n        <h2>Choose Game Mode:</h2>\n        <div>\n            <button id=\"single\"> Single Player </button>\n            <button id=\"multi\"> Multi Player </button>        \n        </div>\n    </div>\n";
var board = exports.board = "\n    <div id=\"Board\">\n            <div class=\"u-flexRow\">\n                <div class=\"Square-container\" id=" + id++ + "></div>\n                <div class=\"Square-container\" id=" + id++ + "></div>\n                <div class=\"Square-container\" id=" + id++ + "></div>\n            </div>\n\n            <div class=\"u-flexRow\">\n                <div class=\"Square-container\" id=" + id++ + "></div>\n                <div class=\"Square-container\" id=" + id++ + "></div>\n                <div class=\"Square-container\" id=" + id++ + "></div>\n            </div>\n\n            <div class=\"u-flexRow\">\n                <div class=\"Square-container\" id=" + id++ + "></div>\n                <div class=\"Square-container\" id=" + id++ + "></div>\n                <div class=\"Square-container\" id=" + id++ + "></div>\n            </div>        \n    </div>\n";

var scoreBoard = exports.scoreBoard = "\n    <div id=\"ScoreBoard\" class=\"u-flexRow\">\n        <div class=\"ScoreBoard-container u-block\" style=\"width:50%\">\n            <h2 class=\"ScoreBoard-container-keys\">X:</h2>\n            <h2 class=\"ScoreBoard-container-values\" id=\"xWins\">0</h2>\n        </div>\n        <div class=\"ScoreBoard-container u-block\" style=\"width:50%\">\n            <h2 class=\"ScoreBoard-container-keys\">O:</h2>\n            <h2 class=\"ScoreBoard-container-values\" id=\"oWins\">0</h2>\n        </div>\n    </div>\n";

var statusPanel = exports.statusPanel = "\n    <div id=\"StatusPanel\">\n        <div class=\"u-inlineBlock StatusPanel-restart\">\n            <span class=\"u-inlineBlock\" id=\"restart-btn\" onclick=location.reload()>restart</span>        \n        </div>\n        <div class=\"u-inlineBlock\">\n            <span id='status-message'>YOUR MOVE</span>\n        </div>\n    </div>\n";

var disableBoard = exports.disableBoard = "\n    <div id=\"DisableBoard\">\n    \n    </div>\n";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(1);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var activeGameController = function () {
    function activeGameController(mode) {
        _classCallCheck(this, activeGameController);

        this.mode = mode;

        this.init();

        this.clicked = [];
        this.xWins = 0;
        this.oWins = 0;
        this.counter = 1;
    }

    _createClass(activeGameController, [{
        key: 'init',
        value: function init() {
            var _this = this;

            var squares = document.getElementsByClassName("Square-container");
            // let restartBtn = document.getElementById('restart-btn');

            squares = [].slice.call(squares);
            squares.forEach(function (square) {
                square.addEventListener('click', _this.onClick.bind(_this));
            });

            // restartBtn.addEventListener('click', location.reload.bind());

        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            this.gameStarter(e);
        }
    }, {
        key: 'gameStarter',
        value: function gameStarter(e) {
            var id = parseInt(e.target.id);
            var mode = this.mode;

            if (this.isClicked(id)) return;

            switch (mode) {
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
    }, {
        key: 'singleMode',
        value: function singleMode(e) {
            var _this2 = this;

            var classList = e.target.classList;
            var square = e.target;
            var id = e.target.id;
            var counter = this.counter;

            square.innerHTML = 'X';
            classList.add('x');

            if (!this.didWin()) {
                this.checkCounter();
                this.incrementCounter();
                this.disableBoard();
                setTimeout(function () {
                    _this2.compMove();
                }, 400);
            } else {
                this.updateScoreBoard('x');
                this.restartGame();
            }
        }
    }, {
        key: 'multiMode',
        value: function multiMode(e) {
            var classList = e.target.classList;
            var square = e.target;
            var id = e.target.id;
            var counter = this.counter;

            if (counter % 2 !== 0) {
                square.innerHTML = 'x';
                classList.add('x');
                if (!this.didWin()) {
                    this.checkCounter();
                    this.incrementCounter();
                } else {
                    this.updateScoreBoard('x');
                    this.restartGame();
                }
            } else {
                square.innerHTML = 'O';
                classList.add('o');
                if (!this.didWin()) {
                    this.checkCounter();
                    this.incrementCounter();
                } else {
                    this.updateScoreBoard('o');
                    this.restartGame();
                }
            }
        }
    }, {
        key: 'compMove',
        value: function compMove() {
            var id = Math.floor(Math.random() * 9 + 1);
            var square = document.getElementById(id);

            if (this.isClicked(id)) {
                this.compMove();
            } else {
                square.innerHTML = 'O';
                square.classList.add('o');
                if (!this.didWin()) {
                    this.checkCounter();
                    this.incrementCounter();
                } else {
                    this.updateScoreBoard('o');
                    this.restartGame();
                }
            }
        }
    }, {
        key: 'isClicked',
        value: function isClicked(id) {
            var clicked = this.clicked;

            if (clicked.indexOf(id) !== -1) {
                return true;
            } else {
                clicked.push(id);
                return false;
            }
        }
    }, {
        key: 'checkCounter',
        value: function checkCounter() {
            if (this.counter === 9) {
                console.log('Count: ', this.counter);

                var status = document.getElementById('StatusPanel');
                this.updateStatus("TIE!");
                this.restartGame();
                this.counter = 0;
            } else {
                return;
            }
        }
    }, {
        key: 'incrementCounter',
        value: function incrementCounter() {
            this.counter++;
        }
    }, {
        key: 'updateStatus',
        value: function updateStatus(msg) {
            var status = document.getElementById('status-message');

            switch (msg) {
                case 'TIE!':
                    {
                        setTimeout(function () {
                            status.innerHTML = msg;
                        }, 100);
                        break;
                    }

                case 'PLAY AGAIN':
                    {
                        setTimeout(function () {
                            status.innerHTML = msg;
                        }, 1500);
                        break;
                    }

                case 'X WON!':
                    {
                        setTimeout(function () {
                            status.innerHTML = msg;
                        }, 100);
                        break;
                    }

                case 'O WON!':
                    {
                        setTimeout(function () {
                            status.innerHTML = msg;
                        }, 100);
                        break;
                    }
            }
        }
    }, {
        key: 'updateScoreBoard',
        value: function updateScoreBoard(winner) {
            var xWinsElement = document.getElementById('xWins');
            var oWinsElement = document.getElementById('oWins');

            if (winner === 'x') {
                xWinsElement.innerHTML = ++this.xWins;
            } else if (winner === 'o') {
                oWinsElement.innerHTML = ++this.oWins;
            } else {
                console.error('error in updatescore statement');
            }
        }

        ///////////////////////////////////////////////////////////

    }, {
        key: 'restartGame',
        value: function restartGame() {
            this.clicked.length = 0;
            this.counter = 1;
            this.resetSquares();
        }
    }, {
        key: 'resetSquares',
        value: function resetSquares() {
            var _this3 = this;

            var Xs = document.getElementsByClassName('x');
            var Os = document.getElementsByClassName('o');

            Xs = [].slice.call(Xs);
            Os = [].slice.call(Os);

            setTimeout(function () {
                _this3.clearValues(Xs, Os);
                _this3.clearClasses(Xs, Os);
            }, 500);
        }
    }, {
        key: 'clearValues',
        value: function clearValues(Xs, Os) {
            Xs.forEach(function (square) {
                square.innerHTML = "";
            });
            Os.forEach(function (square) {
                square.innerHTML = "";
            });
        }
    }, {
        key: 'clearClasses',
        value: function clearClasses(Xs, Os) {
            Xs.forEach(function (square) {
                square.classList.remove('x');
            });
            Os.forEach(function (square) {
                square.classList.remove('o');
            });
        }

        ///////////////////////////////////////////////////////////////

    }, {
        key: 'didWin',
        value: function didWin() {
            var winnings = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

            var slot1 = document.getElementById('1').classList;
            var slot2 = document.getElementById('2').classList;
            var slot3 = document.getElementById('3').classList;
            var slot4 = document.getElementById('4').classList;
            var slot5 = document.getElementById('5').classList;
            var slot6 = document.getElementById('6').classList;
            var slot7 = document.getElementById('7').classList;
            var slot8 = document.getElementById('8').classList;
            var slot9 = document.getElementById('9').classList;

            var slots = [slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9];

            if (slot1.contains('x') && slot2.contains('x') && slot3.contains('x') || slot4.contains('x') && slot5.contains('x') && slot6.contains('x') || slot7.contains('x') && slot8.contains('x') && slot9.contains('x') || slot1.contains('x') && slot4.contains('x') && slot7.contains('x') || slot2.contains('x') && slot5.contains('x') && slot8.contains('x') || slot3.contains('x') && slot6.contains('x') && slot9.contains('x') || slot1.contains('x') && slot5.contains('x') && slot9.contains('x') || slot3.contains('x') && slot5.contains('x') && slot7.contains('x')) {
                this.disableBoard();
                this.updateStatus('X WON!');
                return true;
            } else if (slot1.contains('o') && slot2.contains('o') && slot3.contains('o') || slot4.contains('o') && slot5.contains('o') && slot6.contains('o') || slot7.contains('o') && slot8.contains('o') && slot9.contains('o') || slot1.contains('o') && slot4.contains('o') && slot7.contains('o') || slot2.contains('o') && slot5.contains('o') && slot8.contains('o') || slot3.contains('o') && slot6.contains('o') && slot9.contains('o') || slot1.contains('o') && slot5.contains('o') && slot9.contains('o') || slot3.contains('o') && slot5.contains('o') && slot7.contains('o')) {
                this.disableBoard();
                this.updateStatus('O WON!');
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'disableBoard',
        value: function disableBoard() {
            var disableBoard = document.getElementById('DisableBoard');
            disableBoard.classList.remove('u-hide');

            setTimeout(function () {
                disableBoard.classList.add('u-hide');
            }, 500);
        } //I also tried doing it with removeEventListner()

    }]);

    return activeGameController;
}();

exports.default = activeGameController;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "body {\n  background-color: white;\n  font-family: 'Baloo', cursive;\n  margin: 0;\n  padding: 0; }\n\nbutton {\n  border: 0;\n  padding: 15px;\n  font-size: 35px;\n  font-family: inherit;\n  cursor: pointer; }\n  button:hover {\n    background-color: darkgray; }\n\n#StatusPanel {\n  background-color: black;\n  color: white;\n  font-size: 1.6rem;\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  top: 10px;\n  line-height: 2.2;\n  text-align: center; }\n\n.StatusPanel-restart {\n  position: absolute;\n  left: 50px;\n  font-size: 1.2rem;\n  font-weight: normal;\n  font-family: sarif;\n  transform: rotate(-5deg); }\n\n.StatusPanel-restart span {\n  background-color: #262626;\n  color: #990000;\n  padding: 0 5px;\n  margin-left: 10px;\n  margin-top: 10px;\n  line-height: 1.5;\n  border: 1px solid #1a1a1a;\n  border-radius: 5px;\n  cursor: pointer; }\n  .StatusPanel-restart span:hover {\n    border: 1px solid red;\n    color: lightgray; }\n  .StatusPanel-restart span:active {\n    border: 1px solid #ff9999;\n    color: white; }\n\n#Board {\n  width: 400px;\n  margin: 80px auto 40px; }\n\n#Board .Square-container {\n  background-color: white;\n  color: black;\n  border: 1px solid darkgray;\n  width: 100px;\n  height: 100px;\n  font-weight: bold;\n  font-size: 70px;\n  text-align: center;\n  margin: 15px;\n  display: inline-block;\n  text-transform: uppercase;\n  line-height: 1.5;\n  cursor: pointer; }\n  #Board .Square-container:hover {\n    background-color: #f6f6f6; }\n\n#ScoreBoard {\n  background-color: darkgray;\n  color: #1a1a1a;\n  width: 400px;\n  height: 100px;\n  margin: 0 auto; }\n\n.ScoreBoard-container {\n  text-align: center; }\n  .ScoreBoard-container h2 {\n    margin: 10px;\n    display: inline-block;\n    font-size: 50px; }\n  .ScoreBoard-container .ScoreBoard-container-keys {\n    font-weight: normal;\n    margin-right: 10px; }\n  .ScoreBoard-container .ScoreBoard-container-values {\n    font-family: monospace; }\n\n#DisableBoard {\n  background-color: transparent;\n  width: 800px;\n  height: 600px;\n  position: absolute;\n  top: 0; }\n\n#Game-starter {\n  background-color: white;\n  padding: 40px;\n  border: 1px solid black;\n  width: 600px;\n  text-align: center;\n  margin: 100px auto; }\n  #Game-starter h2 {\n    margin-top: 0; }\n  #Game-starter button {\n    margin-left: 10px; }\n\n.u-flexRow {\n  display: flex; }\n\n.u-block {\n  display: block; }\n\n.u-inlineBlock {\n  display: inline-block; }\n\n.u-show {\n  display: block; }\n\n.u-hide {\n  display: none; }\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map