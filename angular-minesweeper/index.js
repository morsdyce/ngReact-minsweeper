import 'common/assets/stylesheets/minefield.css';

import App from 'angular-minesweeper/components/App/app';
import Board from 'angular-minesweeper/components/board/board';
import Spot from 'angular-minesweeper/components/board/spot/spot';
import Timer from 'angular-minesweeper/components/board/timer/timer';
import Bombs from 'angular-minesweeper/components/board/bombs/bombs';

import MsRightClick from 'angular-minesweeper/common/msRightClick';

export default angular.module('ngReact', [ MsRightClick.name ])
  .directive('app', App)
  .directive('board', Board)
  .directive('spot', Spot)
  .directive('timer', Timer)
  .directive('bombs', Bombs);