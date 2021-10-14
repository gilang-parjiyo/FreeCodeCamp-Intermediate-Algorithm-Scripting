function sumPrimes(num) {
    // variable to hold values prime
    let primes = [];
    // Loop to check variable in array primes are 
    for (let i = 2; i <= num; i++) {
        // using empty array then initialize with i =2, to check i is prime or not;
        if (primes.every(prime => i % prime !== 0)) {
            primes.push(i)
        }
    }
    // using reduce to sum prime number in array primes
    return primes.reduce((acc, curr) => acc + curr, 0)
}