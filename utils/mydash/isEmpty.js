export default (value) => {
    if (typeof value === `string`) { return !value }
    if (!Object.prototype.isPrototypeOf(value)) { return true }
    if (Set.prototype.isPrototypeOf(value)) { return value.size === 0 }
    if (Map.prototype.isPrototypeOf(value)) { return value.size === 0 }

    return Object.keys(value).length === 0;
}
