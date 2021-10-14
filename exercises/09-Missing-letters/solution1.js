function fearNotLetter(str) {
    let missing = undefined;
    let currentCode = str.charCodeAt(0);
    str.split('').forEach((item) => {
        if (item.charCodeAt(0) === currentCode) {
            currentCode++;
        } else {
            missing = String.fromCharCode(currentCode);
        }
    })
    return missing;
}