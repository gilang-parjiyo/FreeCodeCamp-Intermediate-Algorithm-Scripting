const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    // 4: './solution3.js'
}

for (const path in testPath) {
    test('Function diffArray must be exist', () => {
        const diffArray = rewire(testPath[path]).__get__('diffArray');
        expect(diffArray).not.toBe(undefined);
    })
    test('Function diffArray should return number', () => {
        const diffArray = rewire(testPath[path]).__get__('diffArray');
        expect(Array.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))).toBe(true);
    })
    test('Function diffArray must be return right value', () => {
        const diffArray = rewire(testPath[path]).__get__('diffArray');
        expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual(expect.arrayContaining(["pink wool"]));

        expect(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual(expect.arrayContaining(["diorite", "pink wool"]));

        expect(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])).toEqual(expect.arrayContaining([]));

        expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual(expect.arrayContaining([4]));

        expect(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])).toEqual(expect.arrayContaining(["snuffleupagus", "cookie monster", "elmo"]));

        expect(diffArray([1, "calf", 3, "piglet"], [7, "filly"])).toEqual(expect.arrayContaining([1, "calf", 3, "piglet", 7, "filly"]));

    })
}
