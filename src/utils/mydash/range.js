import isNil from "./isNil.js"

const DEFAULT_START = 0;
const DEFAULT_PLUS_STEP = 1;
const DEFAULT_MINUS_STEP = -DEFAULT_PLUS_STEP;

export default (start, end, step) => {
    if (isNil(end)) {
        end = start;
        start = DEFAULT_START;
    }

    if (isNil(step)) {
        step = start <= end
            ? DEFAULT_PLUS_STEP
            : DEFAULT_MINUS_STEP;
    }

    let num = start;
    let result = [];

    while (Math.abs(num) < Math.abs(end)) {
        result.push(num);
        num += step;
    }

    return result;
}


