const rewire = require('rewire');
const testPath = {
    1: './app.js',
    // 2: './solution1.js',
    // 3: './solution2.js',
    // 4: './solution3.js',
    // 5: './solution4.js'
}

for (const path in testPath) {
    describe('Palindrome Checker', function () {
        test(`${path}Function palindrome must be exist`, () => {
            const palindrome = rewire(testPath[path]).__get__('palindrome');
            expect(palindrome).not.toBe(undefined);
        })
        test(`${path}Function palindrome should return number`, () => {
            const palindrome = rewire(testPath[path]).__get__('palindrome');
            expect(typeof palindrome("eye")).toBe('boolean');
        })
        test(`${path}Function palindrome should return right value`, () => {
            const palindrome = rewire(testPath[path]).__get__('palindrome');
            expect(palindrome("eye")).toBe(true);
            expect(palindrome("_eye")).toBe(true);
            expect(palindrome("race car")).toBe(true);
            expect(palindrome("not a palindrome")).toBe(false);
            expect(palindrome("A man, a plan, a canal. Panama")).toBe(true);
            expect(palindrome("never odd or even")).toBe(true);
            expect(palindrome("nope")).toBe(false);
            expect(palindrome("almostomla")).toBe(false);
            expect(palindrome("My age is 0, 0 si ega ym.")).toBe(true);
            expect(palindrome("1 eye for of 1 eye.")).toBe(false);
            expect(palindrome("0_0 (: /-\ :) 0-0")).toBe(true);
            expect(palindrome("five|\_/|four")).toBe(false);

        })
    })

}


