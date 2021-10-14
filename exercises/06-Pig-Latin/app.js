function translatePigLatin(string = '') {
    return !string.match(/[AIUEO]/gi)
        ? `${string}ay` : string.charAt(0).match(/[AIUEO]/gi)
            ? `${string}way` : string.replace(/([^AIUEO]*)([AIUEO]\w*)/i, '$2$1ay')
}


console.log(translatePigLatin("glove"));

// translatePigLatin("california") should return the string aliforniacay