function palindrome(str) {
    let source = str.match(/[A-Z]|\d/gi);
    let target = [];
    if (source) {
        source = source.join('').toLowerCase();
        for (let i = str.length - 1; i >= 0; i--) {
            target.push(source[i]);
        }
    }
    else {
        return false
    }
    return source === target.join('');
}

