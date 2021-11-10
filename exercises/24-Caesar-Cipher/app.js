function rot13(str) {
    return str.split('')
        .map(item => {
            item = item.charCodeAt()
            if (item < 65 || !item > 90) {
                return item
            }
            else {
                if (item + 13 <= 90) {
                    item = item + 13
                }
                else {
                    let reminder = item + 13 - 90 - 1;
                    item = 65 + reminder;
                }
                return item
            }
        })
        .map(item => String.fromCharCode(item)).join('')
}

rot13("SERR PBQR PNZC");