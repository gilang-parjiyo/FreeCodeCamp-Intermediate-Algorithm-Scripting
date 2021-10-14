function uniteUnique(...args) {
    args = args.reduce((acc, curr) => acc.concat(curr));
    return args.filter((item, index) => args.indexOf(item) === index);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));