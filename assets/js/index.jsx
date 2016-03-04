import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import { observe } from './Game';

var mainContent = document.getElementById("mainContent");

observe(function (knightPosition1, knightPosition2) {
    ReactDOM.render(
        <Board knightPosition1={knightPosition1}
               knightPosition2={knightPosition2} />,
        mainContent)
});