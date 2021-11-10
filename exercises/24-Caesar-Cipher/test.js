const rewire = require('rewire');
const testPath = {
    1: './app.js',
    // 2:'./solution1.js',
    // 3:'./solution2.js',
    // 4:'./solution3.js',
    // 5:'./solution4.js'
}

for (const path in testPath) {
    describe('rot13 Checker', function () {
        test(`${path}Function rot13 must be exist`, () => {
            const rot13 = rewire(testPath[path]).__get__('rot13');
            expect(rot13).not.toBe(undefined);
        })
        test(`${path}Function rot13 should return number`, () => {
            const rot13 = rewire(testPath[path]).__get__('rot13');
            expect(typeof rot13("SERR PBQR PNZC")).toBe('string');
        })
        test(`${path}Function rot13 should return right value`, () => {
            const rot13 = rewire(testPath[path]).__get__('rot13');
            expect(rot13("SERR PBQR PNZC")).toBe("FREE CODE CAMP")
            expect(rot13("SERR CVMMN!")).toBe("FREE PIZZA!")
            expect(rot13("SERR YBIR?")).toBe("FREE LOVE?")
            expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.")
        })
    })

}








