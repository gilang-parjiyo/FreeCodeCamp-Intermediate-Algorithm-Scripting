function steamrollArray(arr) {
    let flatArr = [].concat(...arr)
    return flatArr.some(item => Array.isArray(item)) ? steamrollArray(flatArr) : flatArr;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));