const rewire = require('rewire');
const testPath = {
    // 1: './app.js',
    // 2: './solution1.js',
    3: './solution2.js',
    // 4: './solution3.js'
}

for (const path in testPath) {
    test('Function uniteUnique must be exist', () => {
        const uniteUnique = rewire(testPath[path]).__get__('uniteUnique');
        expect(uniteUnique).not.toBe(undefined);
    })
    test('Function uniteUnique should return array', () => {
        const uniteUnique = rewire(testPath[path]).__get__('uniteUnique');
        expect(Array.isArray([1, 3, 2], [5, 2, 1, 4], [2, 1])).toBe(true);
    })
    test('Function uniteUnique must be return right value', () => {
        const uniteUnique = rewire(testPath[path]).__get__('uniteUnique');
        expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4]);
        expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
        expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([1, 2, 3, 5, 4, 6, 7, 8]);
    })
}
