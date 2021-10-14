function dropElements(arr, func) {
    let arrLen = [...arr]
    for (let i = 0; i < arrLen.length; i++) {
        if (func(arrLen[i])) break;
        else arr.shift();
    }
    return arr;
}