const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    // 3: './solution2.js',
    // 4: './solution3.js'
}

for (const path in testPath) {
    test(`${path}Function sumPrimes must be exist`, () => {
        const sumPrimes = rewire(testPath[path]).__get__('sumPrimes');
        expect(sumPrimes).not.toBe(undefined);
    })
    test(`${path}Function sumPrimes should return number`, () => {
        const sumPrimes = rewire(testPath[path]).__get__('sumPrimes');
        expect(typeof sumPrimes(1)).toBe('number');
    })
    test(`${path}Function sumPrimes must be return right value`, () => {
        const sumPrimes = rewire(testPath[path]).__get__('sumPrimes');
        expect(sumPrimes(10)).toEqual(17);
        expect(sumPrimes(977)).toEqual(73156);
    })
}