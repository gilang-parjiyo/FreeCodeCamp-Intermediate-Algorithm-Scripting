const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    4: './solution3.js'
}

for (const path in testPath) {
    test('Function sumAll must be exist', () => {
        const sumAll = rewire(testPath[path]).__get__('sumAll');
        expect(sumAll).not.toBe(undefined);
    })
    test('Function sumAll should return number', () => {
        const sumAll = rewire(testPath[path]).__get__('sumAll');
        expect(typeof sumAll([1, 4])).toBe('number');
    })
    test('Function sumAll must be return right value', () => {
        const sumAll = rewire(testPath[path]).__get__('sumAll');
        expect(sumAll([1, 4])).toEqual(10);
        expect(sumAll([4, 1])).toEqual(10);
        expect(sumAll([5, 10])).toEqual(45);
        expect(sumAll([10, 5])).toEqual(45);
    })
}