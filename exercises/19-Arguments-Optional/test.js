const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    // 3: './solution2.js',
    // 4: './solution3.js',
    // 5: './solution4.js'
}

for (const path in testPath) {
    test(`${path}Function addTogether must be exist`, () => {
        const addTogether = rewire(testPath[path]).__get__('addTogether');
        expect(addTogether).not.toBe(undefined);
    })
    test(`${path}Function addTogether should return number`, () => {
        const addTogether = rewire(testPath[path]).__get__('addTogether');
        expect(typeof addTogether(2, 3)).toBe('number');
    })
    test(`${path}Function addTogether must be return right value`, () => {
        const addTogether = rewire(testPath[path]).__get__('addTogether');
        expect(addTogether(2, 3)).toEqual(5)
        expect(addTogether(5)(7)).toEqual(12)
        expect(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")).toEqual(undefined)
        expect(addTogether(2, "3")).toEqual(undefined)
        expect(addTogether(2)([3])).toEqual(undefined)
    })
}
