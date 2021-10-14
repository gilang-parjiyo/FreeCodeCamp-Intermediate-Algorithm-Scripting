function translatePigLatin(str) {
    if (!str.match(/[AIUEO]+/gi)) {
        return `${str}ay`;
    } else if (str.match(/^[AIUEO]/i)) {
        return `${str}way`;
    } else {
        let index = str.indexOf(str.match(/[AIUEO]/i)[0]);
        return `${str.slice(index)}${str.slice(0, index)}ay`
    }
}

