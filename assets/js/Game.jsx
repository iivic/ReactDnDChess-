let knightPosition = [];
knightPosition.push([1, 7]);
knightPosition.push([1, 0]);
let observer = null;

function emitChange() {
    observer(knightPosition[0], knightPosition[1]);
}

export function observe(o) {
    if (observer) {
        throw new Error('Multiple observers not implemented.');
    }

    observer = o;
    emitChange();

    return () => {
        observer = null;
    };
}

export function moveKnight(id, toX, toY) {
    knightPosition[id] = [toX, toY];
    emitChange();
}

export function canMoveKnight(id, toX, toY, otherPieceId) {
    const [x, y] = knightPosition[id];
    const dx = toX - x;
    const dy = toY - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2) && otherPieceId == false;
}