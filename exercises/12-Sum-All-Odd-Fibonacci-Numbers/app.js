function sumFibs(num) {
    // create condition fi num 0 return 0
    if (num < 0) return 0;

    // create array containing step fibonanci
    const arrFibs = [1, 1];
    let nextFib = 0;

    // while loop to insert next fibonanci to arrFibs
    while ((nextFib = arrFibs[0] + arrFibs[1]) <= num) {
        arrFibs.unshift(nextFib);
    }

    // find Odd Fibonancy then sum it. 
    return arrFibs.filter(num => num % 2 !== 0)
        .reduce((acc, curr) => acc + curr);
}