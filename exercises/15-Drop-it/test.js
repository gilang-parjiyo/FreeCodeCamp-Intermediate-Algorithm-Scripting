const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    4: './solution3.js',
    5: './solution4.js'
}

for (const path in testPath) {
    test(`${path}Function dropElements must be exist`, () => {
        const dropElements = rewire(testPath[path]).__get__('dropElements');
        expect(dropElements).not.toBe(undefined);
    })
    test(`${path}Function dropElements should return array`, () => {
        const dropElements = rewire(testPath[path]).__get__('dropElements');
        expect(Array.isArray(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }))).toBe(true);
    })
    test(`${path}Function dropElements must be return right value`, () => {
        const dropElements = rewire(testPath[path]).__get__('dropElements');
        expect(dropElements([1, 2, 3, 4], function (n) { return n >= 3; })).toEqual([3, 4]);
        expect(dropElements([0, 1, 0, 1], function (n) { return n === 1; })).toEqual([1, 0, 1]);
        expect(dropElements([1, 2, 3], function (n) { return n > 0; })).toEqual([1, 2, 3]);
        expect(dropElements([1, 2, 3, 4], function (n) { return n > 5; })).toEqual([]);
        expect(dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; })).toEqual([7, 4]);
        expect(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; })).toEqual([3, 9, 2]);
    })
}

/*
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

Passed
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].

Passed
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2]
*/