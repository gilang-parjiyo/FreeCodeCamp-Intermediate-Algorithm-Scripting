const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    // 4: './solution3.js'
}

for (const path in testPath) {
    test(`${path}Function smallestCommons must be exist`, () => {
        const smallestCommons = rewire(testPath[path]).__get__('smallestCommons');
        expect(smallestCommons).not.toBe(undefined);
    })
    test(`${path}Function smallestCommons should return number`, () => {
        const smallestCommons = rewire(testPath[path]).__get__('smallestCommons');
        expect(typeof smallestCommons([1, 5])).toBe('number');
    })
    test(`${path}Function smallestCommons must be return right value`, () => {
        const smallestCommons = rewire(testPath[path]).__get__('smallestCommons');
        expect(smallestCommons([1, 5])).toEqual(60);
        expect(smallestCommons([5, 1])).toEqual(60);
        expect(smallestCommons([2, 10])).toEqual(2520);
        expect(smallestCommons([1, 13])).toEqual(360360);
        expect(smallestCommons([23, 18])).toEqual(6056820);
    })
}
