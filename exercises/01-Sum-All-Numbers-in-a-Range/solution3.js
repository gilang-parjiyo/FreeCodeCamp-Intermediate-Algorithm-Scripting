function sumAll(arr) {
    let [first, last] = arr.sort((a, b) => a - b);
    return first !== last
        ? first + sumAll([first + 1, last])
        : first;
}