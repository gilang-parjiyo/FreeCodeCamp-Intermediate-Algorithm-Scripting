function sumPrimes(num) {
    // Create array from num and fill with true values
    let arrPrimes = Array(num + 1).fill(true);
    // 0 and 1 are not prime
    arrPrimes[0] = false;
    arrPrimes[1] = false;

    //loop trough array
    for (let i = 2; i <= num; i++) {
        // using formula 
        for (let j = i * i; j <= num; j += i) {
            arrPrimes[j] = false;
        }
    }
    // sum all true values using index.
    return arrPrimes.reduce((sum, prime, index) => prime ? sum + index : sum, 0);
}

console.log(sumPrimes(10));