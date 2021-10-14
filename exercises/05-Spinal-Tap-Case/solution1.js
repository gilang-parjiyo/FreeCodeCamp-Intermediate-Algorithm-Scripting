function spinalCase(string) {
    // reate space between match regex group
    str = string.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Split string then join with character -
    return str.split(/-|\s|_/g).join("-").toLowerCase()
}
