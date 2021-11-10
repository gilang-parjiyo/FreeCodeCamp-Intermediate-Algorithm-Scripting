function truthCheck(collection, pre) {
    for (let value of collection) {
        if (!collection.hasOwnProperty(value) && !Boolean(value[pre])) {
            return false
        }
    }
    return true
}