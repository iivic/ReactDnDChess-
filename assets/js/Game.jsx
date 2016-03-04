let knightPosition1 = [1, 7];
let knightPosition2 = [1, 0];
let observer = null;

function emitChange() {
    observer(knightPosition1, knightPosition2);
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

export function moveKnight1(toX, toY) {
    knightPosition1 = [toX, toY];
    emitChange();
}

export function canMoveKnight1(toX, toY) {
    const [x, y] = knightPosition1;
    const dx = toX - x;
    const dy = toY - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}