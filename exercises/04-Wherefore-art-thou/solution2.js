function whatIsInAName(collection, source) {
    let sourceKey = Object.keys(source);
    return collection.filter(obj => {
        return sourceKey.map(item => {
            return obj.hasOwnProperty(item) ||
                obj[item] === source[item];
        }).reduce((a, b) => a && b)
    })

}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });