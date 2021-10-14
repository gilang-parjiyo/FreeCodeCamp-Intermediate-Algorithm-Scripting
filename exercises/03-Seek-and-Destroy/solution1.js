function destroyer(arr) {
    let valueRemove = Array.from(arguments).slice(1)

    for (let i = 0; i < valueRemove.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === valueRemove[i]) delete arr[j]
        }
    }
    return  arr.filter(item => item !== null)
}