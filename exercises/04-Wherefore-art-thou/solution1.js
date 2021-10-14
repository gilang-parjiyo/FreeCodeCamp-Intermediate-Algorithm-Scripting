function whatIsInAName(collection, source) {
    let sourceKey = Object.keys(source);

    return collection.filter(obj => {
        return sourceKey.every(item => {
            return obj.hasOwnProperty(item) || obj[item] === source[item]
        })
    })
}

