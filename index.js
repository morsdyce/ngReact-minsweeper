import 'common/assets/stylesheets/global.css';

import angular from 'angular';
import React from 'react';

import AngularMinesweeper from 'angular-minesweeper';
import ReactMinesweeper from 'react-minesweeper/app.jsx';

let angularContainer = document.getElementById('angular');
let reactContainer   = document.getElementById('react');

// render angular to #angular dom node
angular.bootstrap(angularContainer, [AngularMinesweeper.name]);

// render react into #react dom node
React.render(<ReactMinesweeper />, reactContainer);
