const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    // 4: './solution3.js'
}

for (const path in testPath) {
    test('Function fearNotLetter must be exist', () => {
        const fearNotLetter = rewire(testPath[path]).__get__('fearNotLetter');
        expect(fearNotLetter).not.toBe(undefined);
    })
    test('Function fearNotLetter should return array', () => {
        const fearNotLetter = rewire(testPath[path]).__get__('fearNotLetter');
        expect(typeof (fearNotLetter("abce"))).toBe('string');
    })
    test('Function fearNotLetter must be return right value', () => {
        const fearNotLetter = rewire(testPath[path]).__get__('fearNotLetter');
        expect(fearNotLetter("abce")).toEqual("d");
        expect(fearNotLetter("abcdefghjklmno")).toEqual('i');
        expect(fearNotLetter("stvwx")).toEqual("u");
        expect(fearNotLetter("bcdf")).toEqual("e");
        expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz")).toEqual(undefined);
    })

}

/* fearNotLetter("abce") should return the string d.

Passed
fearNotLetter("abcdefghjklmno") should return the string i.

Passed
fearNotLetter("stvwx") should return the string u.

Passed
fearNotLetter("bcdf") should return the string e.

Passed
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined. */