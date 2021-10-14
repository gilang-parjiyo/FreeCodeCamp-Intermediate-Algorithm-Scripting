function diffArray(arr1, arr2) {
    let arrMerge = [...arr1, ...arr2]
    return arrMerge.filter(item => !arr1.includes(item) || !arr2.includes(item))
}