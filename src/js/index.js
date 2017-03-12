import styles from '../styles/styles.scss';

import { starter, board, scoreBoard, statusPanel, disableBoard } from './templates';
import boardController from './controllers/boardController';

let views = {starter, board, scoreBoard, statusPanel, disableBoard};
let app = new boardController(views);
