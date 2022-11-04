import isEmpty from "./isEmpty.js";


export default (arr) => {
    const length = arr ? arr.length : 0;
    return arr[length - 1];
}
