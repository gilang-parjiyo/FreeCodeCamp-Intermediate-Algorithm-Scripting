function smallestCommons(arr) {
    // Setup find start, stop, and step range
    let [start, stop] = arr.sort((a, b) => a - b);
    let step = 1;
    const range = Array.from({ length: (stop - start) / 1 + step }, (_, i) => start + (i * step))

    // Setup for increment
    let smallestCommons = stop;

    //will end when smallestCommons can divisible by number of range
    while (true) {
        if (range.every(item => smallestCommons % item === 0)) {
            return smallestCommons;
        }
        smallestCommons += stop;
    }
}