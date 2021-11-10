function truthCheck(collection, pre) {
    return collection.every(item => {
        return item.hasOwnProperty(pre) && Boolean(item[pre])
    })
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex")