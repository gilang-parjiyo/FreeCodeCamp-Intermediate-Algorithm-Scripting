const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    4: './solution3.js'
}

for (const path in testPath) {
    test(`${path}Function convertHTML must be exist`, () => {
        const convertHTML = rewire(testPath[path]).__get__('convertHTML');
        expect(convertHTML).not.toBe(undefined);
    })
    test(`${path}Function convertHTML should return string`, () => {
        const convertHTML = rewire(testPath[path]).__get__('convertHTML');
        expect(typeof convertHTML("Dolce & Gabbana")).toBe('string');
    })
    test(`${path}Function convertHTML must be return right value`, () => {
        const convertHTML = rewire(testPath[path]).__get__('convertHTML');
        expect(convertHTML("Hamburgers < Pizza < Tacos")).toEqual("Hamburgers &lt; Pizza &lt; Tacos");
        expect(convertHTML("Sixty > twelve")).toEqual("Sixty &gt; twelve");
        expect(convertHTML('Stuff in "quotation marks"')).toEqual("Stuff in &quot;quotation marks&quot;");
        expect(convertHTML("Schindler's List")).toEqual("Schindler&apos;s List");
        expect(convertHTML('<>')).toEqual("&lt;&gt;");
        expect(convertHTML('abc')).toEqual("abc");
    })
}