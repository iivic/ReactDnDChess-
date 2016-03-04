import React, { Component, PropTypes } from 'react';
import Square from './Square';
import { canMoveKnight1, moveKnight1 } from './Game';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

const squareTarget = {
    canDrop(props) {
        return canMoveKnight1(props.x, props.y);
    },

    drop(props) {
        return moveKnight1(props.x, props.y);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

class BoardSquare extends Component {
    renderOverlay(color) {
        return (
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: 1,
                opacity: 0.5,
                backgroundColor: color
            }}/>
        );
    }

    render() {
        console.log(this.props);
        const { x, y, connectDropTarget, isOver, canDrop } = this.props;
        const black = (x + y) % 2 === 1;

        return connectDropTarget(
            <div style={{ position: 'relative' }}>
                <Square black={black}>
                    {this.props.children}
                </Square>
                {isOver && !canDrop && this.renderOverlay('red')}
                {!isOver && canDrop && this.renderOverlay('yellow')}
                {isOver && canDrop && this.renderOverlay('green')}
            </div>
        );
    }

}

BoardSquare.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    knightPosition1: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired,
    knightPosition2: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);