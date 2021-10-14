function translatePigLatin(string) {
    return string.replace(/^[AIUEO]\w*/i, '$&way')
        .replace(/(^[^AIUEO]+)(\w*)/i, "$2$1ay")
}

