function uniteUnique(...args) {
    return [...new Set(args.flat())]
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));