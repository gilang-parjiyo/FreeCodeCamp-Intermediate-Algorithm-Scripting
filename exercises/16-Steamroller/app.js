function steamrollArray(arr) {
    return arr.flat(Infinity);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));