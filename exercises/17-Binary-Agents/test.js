const rewire = require('rewire');
const testPath = {
    1: './app.js',
    // 2: './solution1.js',
    // 3: './solution2.js',
    // 4: './solution3.js',
    // 5: './solution4.js'
}

for (const path in testPath) {
    describe('Test 17-Binary Agents', () => {
        it(`${path}Function binaryAgent must be exist`, () => {
            const binaryAgent = rewire(testPath[path]).__get__('binaryAgent');
            expect(binaryAgent).not.toBe(undefined);
        })
        it(`${path}Function binaryAgent should return number`, () => {
            const binaryAgent = rewire(testPath[path]).__get__('binaryAgent');
            expect(typeof binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")).toBe('string');
        })
        it(`${path}Function binaryAgent must be return right value`, () => {
            const binaryAgent = rewire(testPath[path]).__get__('binaryAgent');
            expect(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")).toEqual("Aren't bonfires fun!?");
            expect(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")).toEqual("I love FreeCodeCamp!");
        })
    })
}
