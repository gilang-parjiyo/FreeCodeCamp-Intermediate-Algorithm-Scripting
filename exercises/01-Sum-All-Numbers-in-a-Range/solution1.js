function sumAll(arr) {
    let [start, end] = arr.sort((a, b) => a - b);
    
    // count of number between start to end
    const countNumber = Math.abs(start - end) + 1;
    // arhitmatic progression
    const sum = ((start + end) * countNumber) / 2;
    return sum;
}

sumAll([1, 4]);