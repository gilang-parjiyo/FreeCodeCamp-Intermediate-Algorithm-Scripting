const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    3: './solution2.js',
    // 4: './solution3.js',
    // 5: './solution4.js'
}

for (const path in testPath) {
    test(`${path}Function truthCheck must be exist`, () => {
        const truthCheck = rewire(testPath[path]).__get__('truthCheck');
        expect(truthCheck).not.toBe(undefined);
    })
    test(`${path}Function truthCheck should return number`, () => {
        const truthCheck = rewire(testPath[path]).__get__('truthCheck');
        expect(typeof truthCheck([{ "single": "yes" }], "single")).toBe('boolean');
    })
    test(`${path}Function truthCheck must be return right value`, () => {
        const truthCheck = rewire(testPath[path]).__get__('truthCheck');
        expect(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex")).toEqual(true);
        expect(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex")).toEqual(false);
        expect(truthCheck([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age")).toEqual(false);
        expect(truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true }, { "name": "FastForward", "onBoat": null }], "onBoat")).toEqual(false);
        expect(truthCheck([{ "single": "yes" }], "single")).toEqual(true);
        expect(truthCheck([{ "single": "" }, { "single": "double" }], "single")).toEqual(false);
        expect(truthCheck([{ "single": "double" }, { "single": undefined }], "single")).toEqual(false);
        expect(truthCheck([{ "single": "double" }, { "single": NaN }], "single")).toEqual(false);

    })
}
