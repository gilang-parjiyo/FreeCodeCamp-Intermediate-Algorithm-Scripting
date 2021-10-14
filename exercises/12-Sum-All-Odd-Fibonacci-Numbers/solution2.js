function sumFibs(num) {
    // conditoin if num is 0
    if (num < 0) return 0;

    // variable to hold value sum of odd fibonanci
    let sumOddFibs = 0;

    // loop to process fibonancy number
    for (let n1 = 0, n2 = 1, temp; n2 <= num; temp = n2, n2 += n1, n1 = temp) {
        sumOddFibs += n2 * (n2 % 2); //sum odd fibonancy to variable sumOddFibs
    }
    return sumOddFibs;
}
