function uniteUnique(...args) {
    let union = args.reduce((acc, curr) => acc.concat(curr))
    return [...new Set(union)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);