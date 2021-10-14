const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    // 4: './solution3.js'
}

for (const path in testPath) {
    test(`${path}Function sumFibs must be exist`, () => {
        const sumFibs = rewire(testPath[path]).__get__('sumFibs');
        expect(sumFibs).not.toBe(undefined);
    })
    test(`${path}Function sumFibs should return string`, () => {
        const sumFibs = rewire(testPath[path]).__get__('sumFibs');
        expect(typeof sumFibs(1)).toBe('number');
    })
    test(`${path}Function sumFibs must be return right value`, () => {
        const sumFibs = rewire(testPath[path]).__get__('sumFibs');
        expect(sumFibs(1000)).toEqual(1785);
        expect(sumFibs(4000000)).toEqual(4613732);
        expect(sumFibs(4)).toEqual(5);
        expect(sumFibs(75024)).toEqual(60696);
        expect(sumFibs(75025)).toEqual(135721);
    })
}