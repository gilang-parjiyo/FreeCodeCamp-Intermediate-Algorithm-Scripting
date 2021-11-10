function sumAll(arr) {
    let sum = 0;
    let [start, stop] = arr.sort((a, b) => a - b);
    for (let i = start; i <= stop; i++) {
        sum += i;
    }
    return sum;
}

sumAll([4, 1]);