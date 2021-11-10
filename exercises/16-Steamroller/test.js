const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    4: './solution3.js',
    5: './solution4.js'
}

for (const path in testPath) {
    test(`${path}Function steamrollArray must be exist`, () => {
        const steamrollArray = rewire(testPath[path]).__get__('steamrollArray');
        expect(steamrollArray).not.toBe(undefined);
    })
    test(`${path}Function steamrollArray should return number`, () => {
        const steamrollArray = rewire(testPath[path]).__get__('steamrollArray');
        expect(Array.isArray(steamrollArray([1, 5]))).toBe(true);
    })
    test(`${path}Function steamrollArray must be return right value`, () => {
        const steamrollArray = rewire(testPath[path]).__get__('steamrollArray');
        expect(steamrollArray([[["a"]], [["b"]]])).toEqual(["a", "b"]);
        expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
        expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
        expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
    })
}
