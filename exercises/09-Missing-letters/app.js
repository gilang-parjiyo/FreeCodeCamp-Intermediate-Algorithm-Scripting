function fearNotLetter(str = '') {
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode !== str.charCodeAt(0) + i) {
            return String.fromCharCode(charCode - 1)
        }
    }
}