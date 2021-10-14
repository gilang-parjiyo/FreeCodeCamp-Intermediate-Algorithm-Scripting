function smallestCommons(arr) {
    // Setup min, max, range of array and upperbound(max samllestCommon possible)
    const [min, max] = arr.sort((a, b) => a - b);
    let range = Array(max - min + 1).fill(0).map((v, i) => i + min);
    let upperBound = range.reduce((a, b) => a * b);

    // loop and use array every method to check multiple is divisible by all number in range.
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        if(range.every(item => multiple % item === 0 )){
            return multiple;
        }
    }
}