const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    // 3: './solution2.js',
    // 4: './solution3.js',
    // 5: './solution4.js'
}

for (const path in testPath) {
    describe('Make A Person function', () =>){
        test(`${path}Function Person must be exist`, () => {
            const Person = rewire(testPath[path]).__get__('Person');
            expect(Person).not.toBe(undefined);
        })
        test(`${path}Function Person should return number`, () => {
            const Person = rewire(testPath[path]).__get__('Person');
            expect(typeof Person(2, 3)).toBe('number');
        })
        test(`${path}No properties should be added`, () => {
            const Person = rewire(testPath[path]).__get__('Person');
            expect(Object.keys(bob)).toBe(6);
        })
    }

}
