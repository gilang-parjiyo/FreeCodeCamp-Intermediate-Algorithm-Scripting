function steamrollArray(arr, flat = []) {
    let elem = arr.pop();
    return elem
        ? !Array.isArray(elem)
            ? steamrollArray(arr, [elem, ...flat])
            : steamrollArray(arr.concat(elem), flat)
        : flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));