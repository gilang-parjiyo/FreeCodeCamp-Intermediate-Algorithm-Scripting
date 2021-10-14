function whatIsInAName(collection, source) {
    let sourceKey = Object.keys(source);

    return collection.filter(item => {
        for (let i = 0; i < sourceKey.length; i++) {
            if (!item.hasOwnProperty(sourceKey[i]) ||
                (item[sourceKey[i]] !== source[sourceKey[i]])) {
                    return false
            } 
        }
        return true;
    });
}


