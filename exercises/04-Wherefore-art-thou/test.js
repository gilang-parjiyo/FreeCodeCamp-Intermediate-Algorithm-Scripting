const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    // 4: './solution3.js'
}

for (const path in testPath) {
    test('Function whatIsInAName must be exist', () => {
        const whatIsInAName = rewire(testPath[path]).__get__('whatIsInAName');
        expect(whatIsInAName).not.toBe(undefined);
    })
    test('Function whatIsInAName should return array', () => {
        const whatIsInAName = rewire(testPath[path]).__get__('whatIsInAName');
        expect(Array.isArray(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))).toBe(true);
    })
    test('Function whatIsInAName must be return right value', () => {
        const whatIsInAName = rewire(testPath[path]).__get__('whatIsInAName');
        expect(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })).toEqual(expect.arrayContaining([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]));

        expect(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })).toEqual(expect.arrayContaining([{ "apple": 1, "bat": 2, "cookie": 2 }]));

        expect(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })).toEqual(expect.arrayContaining([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]));

        expect(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 })).toEqual(expect.arrayContaining([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]));

        expect(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 })).toEqual(expect.arrayContaining([]));
    })
    
}

/* 
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []
*/