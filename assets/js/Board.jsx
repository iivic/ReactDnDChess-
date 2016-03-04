import React, { Component, PropTypes } from 'react';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import { moveKnight, canMoveKnight } from './Game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Board extends Component {

    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        return (
            <div key={i}
                 className="one-square">
                <BoardSquare
                    x={x}
                    y={y}
                    knightPosition1={this.props.knightPosition1}
                    knightPosition2={this.props.knightPosition2}
                    >
                    {this.renderPiece(x, y)}
                </BoardSquare>
            </div>
        );
    }

    renderPiece(x, y) {
        for (var key in this.props) {
            if (this.props.hasOwnProperty(key)) {
                const [knightX, knightY] = this.props[key];
                if (x === knightX && y === knightY) {
                    return <Knight />;
                }
            }
        }
    }


    render() {
        const squares = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }

        return (
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
              }}>
                {squares}
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Board);