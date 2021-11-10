const rewire = require('rewire');
const testPath = {
    1: './app.js',
    // 2:'./solution1.js',
    // 3:'./solution2.js',
    // 4:'./solution3.js',
    // 5:'./solution4.js'
}

for (const path in testPath) {
    describe('convertToRoman Checker', function () {
        test(`${path}Function convertToRoman must be exist`, () => {
            const convertToRoman = rewire(testPath[path]).__get__('convertToRoman');
            expect(convertToRoman).not.toBe(undefined);
        })
        test(`${path}Function convertToRoman should return number`, () => {
            const convertToRoman = rewire(testPath[path]).__get__('convertToRoman');
            expect(typeof convertToRoman("eye")).toBe('boolean');
        })
        test(`${path}Function convertToRoman should return right value`, () => {
            const convertToRoman = rewire(testPath[path]).__get__('convertToRoman');
            expect(convertToRoman(2)).toBe('II')
            expect(convertToRoman(3)).toBe('III')
            expect(convertToRoman(4)).toBe('IV')
            expect(convertToRoman(5)).toBe('V')
            expect(convertToRoman(9)).toBe('IX')
            expect(convertToRoman(12)).toBe('XII')
            expect(convertToRoman(16)).toBe('XVI')
            expect(convertToRoman(29)).toBe('XXIX')
            expect(convertToRoman(44)).toBe('XLIV')
            expect(convertToRoman(45)).toBe('XLV')
            expect(convertToRoman(68)).toBe('LXVIII')
            expect(convertToRoman(83)).toBe('LXXXIII')
            expect(convertToRoman(97)).toBe('XCVII')
            expect(convertToRoman(99)).toBe('XCIX')
            expect(convertToRoman(400)).toBe('CD')
            expect(convertToRoman(500)).toBe('D')
            expect(convertToRoman(501)).toBe('DI')
            expect(convertToRoman(649)).toBe('DCXLIX')
            expect(convertToRoman(798)).toBe('DCCXCVIII')
            expect(convertToRoman(891)).toBe('DCCCXCI')
            expect(convertToRoman(1000)).toBe('M')
            expect(convertToRoman(1004)).toBe('MIV')
            expect(convertToRoman(1006)).toBe('MVI')
            expect(convertToRoman(1023)).toBe('MXXIII')
            expect(convertToRoman(2014)).toBe('MMXIV')
            expect(convertToRoman(3999)).toBe('MMMCMXCIX')
        })
    })

}






