function sumPrimes(num) {
    // variable to hold value prime number
    let primeNumber = 0;
    // function to check number is prime 
    function isPrime(num) {
        //loop trough range of num and is divible other than itself or not 
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        } return true;
    }
    //Sum all prime number in range.
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) primeNumber += i;

    }
    return primeNumber;

}
sumPrimes(10);