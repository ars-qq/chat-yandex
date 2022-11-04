import sum from "./modules/sum/sum.js"
import range from "./utils/mydash/range.js"

const arr = range(-6)

const $node = document.getElementById(`root`);
$node.textContent = arr.join(` : `);
