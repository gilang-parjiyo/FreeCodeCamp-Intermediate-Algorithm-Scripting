const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    // 4: './solution3.js'
}

for (const path in testPath) {
    test('Function spinalCase must be exist', () => {
        const spinalCase = rewire(testPath[path]).__get__('spinalCase');
        expect(spinalCase).not.toBe(undefined);
    })
    test('Function spinalCase should return array', () => {
        const spinalCase = rewire(testPath[path]).__get__('spinalCase');
        expect(typeof (spinalCase("This Is Spinal Tap"))).toBe('string');
    })
    test('Function spinalCase must be return right value', () => {
        const spinalCase = rewire(testPath[path]).__get__('spinalCase');
        expect(spinalCase("This Is Spinal Tap")).toEqual("this-is-spinal-tap");
        expect(spinalCase("thisIsSpinalTap")).toEqual("this-is-spinal-tap");
        expect(spinalCase("The_Andy_Griffith_Show")).toEqual("the-andy-griffith-show");
        expect(spinalCase("Teletubbies say Eh-oh")).toEqual("teletubbies-say-eh-oh");
        expect(spinalCase("AllThe-small Things")).toEqual("all-the-small-things");
    })

}