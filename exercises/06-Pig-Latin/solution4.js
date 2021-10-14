function translatePigLatin(str = '', charpos = 0) {
    return ['a', 'i', 'u', 'e', 'o'].includes(str[0]) ?
        str + (charpos === 0 ? 'way' : 'ay')
        : charpos === str.length
            ? str + 'ay'
            : translatePigLatin(str.slice(1) + str[0], charpos += 1)
}

console.log(console.log(translatePigLatin("california")));
