export default (...args) => {
    if (args.length === 0) {
        throw new Error(`no arguments`)
    }

    return args.reduce((acc, arg) => acc + arg);
}
