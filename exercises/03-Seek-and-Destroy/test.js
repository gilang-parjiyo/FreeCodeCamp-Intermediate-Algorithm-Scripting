const rewire = require('rewire');
const testPath = {
    1: './app.js',
    2: './solution1.js',
    // 3: './solution2.js',
    // 4: './solution3.js'
}

for (const path in testPath) {
    test('Function destroyer must be exist', () => {
        const destroyer = rewire(testPath[path]).__get__('destroyer');
        expect(destroyer).not.toBe(undefined);
    })
    test('Function destroyer should return number', () => {
        const destroyer = rewire(testPath[path]).__get__('destroyer');
        expect(Array.isArray(destroyer([1, 2, 3, 5], [1, 2, 3, 4, 5]))).toBe(true);
    })
    test('Function destroyer must be return right value', () => {
        const destroyer = rewire(testPath[path]).__get__('destroyer');
        expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual(expect.arrayContaining([1, 1]));
        expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual(expect.arrayContaining([1, 5, 1]));
        expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toEqual(expect.arrayContaining([1]));
        expect(destroyer([2, 3, 2, 3], 2, 3)).toEqual(expect.arrayContaining([]));
        expect(destroyer(["tree", "hamburger", 53], "tree", 53)).toEqual(expect.arrayContaining(["hamburger"]));
        expect(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")).toEqual(expect.arrayContaining([12, 92, 65]));
    })
}
