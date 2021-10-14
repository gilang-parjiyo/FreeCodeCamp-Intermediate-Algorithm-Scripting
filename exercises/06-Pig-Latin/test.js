const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    4: './solution3.js'
}

for (const path in testPath) {
    test('Function translatePigLatin must be exist', () => {
        const translatePigLatin = rewire(testPath[path]).__get__('translatePigLatin');
        expect(translatePigLatin).not.toBe(undefined);
    })
    test('Function translatePigLatin should return string', () => {
        const translatePigLatin = rewire(testPath[path]).__get__('translatePigLatin');
        expect(typeof (translatePigLatin("california"))).toBe('string');
    })
    test('Function translatePigLatin must be return right value', () => {
        const translatePigLatin = rewire(testPath[path]).__get__('translatePigLatin');
        expect(translatePigLatin("california")).toEqual("aliforniacay");
        expect(translatePigLatin("paragraphs")).toEqual("aragraphspay");
        expect(translatePigLatin("glove")).toEqual("oveglay");
        expect(translatePigLatin("algorithm")).toEqual("algorithmway");
        expect(translatePigLatin("eight")).toEqual("eightway");
        expect(translatePigLatin("schwartz")).toEqual("artzschway");
        expect(translatePigLatin("rhythm")).toEqual("rhythmay");
    })

}

