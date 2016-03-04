import React, { PropTypes, Component } from 'react';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

const knightSource = {
    beginDrag(props) {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

export default class Knight extends Component {
    render() {
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 84,
                fontWeight: 'bold',
                cursor: 'pointer',
                textAlign: 'center'
            }}
                isDragging={false}>
                ♘
            </div>
        );
    }
}

Knight.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);