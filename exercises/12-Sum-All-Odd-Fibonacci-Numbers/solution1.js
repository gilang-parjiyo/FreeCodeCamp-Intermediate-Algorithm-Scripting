function sumFibs(num) {
    // Setup for find fibonanci number
    let prev = 0;
    let curr = 1;
    let result = 0;

    // loop to find find odd fibonanci number and sum it.
    while (curr <= num) {
        if (curr % 2 !== 0) {
            result += curr;
        }

        // find previus and current fibonanci number.
        curr += prev;
        prev = curr - prev;
    }
    return result;
}