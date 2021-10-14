const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    // 4: './solution3.js'
}

for (const path in testPath) {
    test('Function myReplace must be exist', () => {
        const myReplace = rewire(testPath[path]).__get__('myReplace');
        expect(myReplace).not.toBe(undefined);
    })
    test('Function myReplace should return string', () => {
        const myReplace = rewire(testPath[path]).__get__('myReplace');
        expect(typeof (myReplace("Let us go to the store", "store", "mall"))).toBe('string');
    })
    test('Function myReplace must be return right value', () => {
        const myReplace = rewire(testPath[path]).__get__('myReplace');
        expect(myReplace("Let us go to the store", "store", "mall")).toEqual("Let us go to the mall");
        expect(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")).toEqual("He is Sitting on the couch");
        expect(myReplace("I think we should look up there", "up", "Down")).toEqual("I think we should look down there");
        expect(myReplace("This has a spellngi error", "spellngi", "spelling")).toEqual("This has a spelling error");
        expect(myReplace("His name is Tom", "Tom", "john")).toEqual("His name is John");
        expect(myReplace("Let us get back to more Coding", "Coding", "algorithms")).toEqual("Let us get back to more Algorithms");
    })

}
