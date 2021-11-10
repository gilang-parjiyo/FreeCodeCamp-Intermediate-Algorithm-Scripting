function spinalCase(string) {
    var regex = (/\s+|_+/g)
    let str = string.replace(/([a-z])([A-Z])/g, '$1 $2')
    return str.replace(regex, '-').toLowerCase()
}

spinalCase("AllThe-small Things");