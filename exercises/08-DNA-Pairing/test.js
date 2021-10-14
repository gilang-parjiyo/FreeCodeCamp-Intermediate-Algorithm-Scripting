const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    // 3: './solution2.js',
    // 4: './solution3.js'
}

for (const path in testPath) {
    test('Function pairElement must be exist', () => {
        const pairElement = rewire(testPath[path]).__get__('pairElement');
        expect(pairElement).not.toBe(undefined);
    })
    test('Function pairElement should return array', () => {
        const pairElement = rewire(testPath[path]).__get__('pairElement');
        expect(Array.isArray(pairElement("ATCGA"))).toBe(true);
    })
    test('Function pairElement must be return right value', () => {
        const pairElement = rewire(testPath[path]).__get__('pairElement');
        expect(pairElement("ATCGA")).toEqual([["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]);
        expect(pairElement("TTGAG")).toEqual([["T", "A"], ["T", "A"], ["G", "C"], ["A", "T"], ["G", "C"]]);
        expect(pairElement("CTCTA")).toEqual([["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]]);
    })

}