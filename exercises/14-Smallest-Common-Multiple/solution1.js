function smallestCommons(arr) {
    // Setup sort and find length of array sequential
    let [min, max] = arr.sort((a, b) => a - b);
    let range = max - min + 1;

    // Set max smallest common possible
    let upperBound = 1;
    for (let i = min; i <= max; i++) upperBound *= i;

    //Loop every number in range and increment by max number
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // count to track divible number of item
        let count = 0;
        // compare mulitple value with each number on range is divisible
        for (let j = min; j <= max; j++) {
            if (multiple % j === 0) count++;
        }
        //compare sum of divisble number with array range
        if (range === count) return multiple;
    }
}