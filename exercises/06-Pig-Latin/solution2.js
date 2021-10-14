function translatePigLatin(str) {
    if (str.match(/^[AIUEO]/i)) return `${str}way`;
    
    // Get consonant paragraph
    let consonant = str.match(/^[^AIUEO]+/i)[0];

    // Get character after vowel then concat with variable consonant above and ay
    return str.substring(consonant.length) + consonant + 'ay';
}