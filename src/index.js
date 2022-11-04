import sum from "./modules/sum/sum.js"
import range from "./utils/mydash/range.js"

const arr = range(5, 25, 3)

const $node = document.getElementById(`root`);
$node.textContent = arr.join(` : `);
