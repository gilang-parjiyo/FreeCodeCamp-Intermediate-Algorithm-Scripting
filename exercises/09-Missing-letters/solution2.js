function fearNotLetter(sentence) {
    for (let i = 1; i < sentence.length; i++) {
        let currentChar = sentence.charCodeAt(i)
        if (currentChar - sentence.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(currentChar - 1)
        }
    }
}