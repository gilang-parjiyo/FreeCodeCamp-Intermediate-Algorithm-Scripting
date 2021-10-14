function destroyer(arr, numDestroyer) {
    let [arr1, ...rest] = arguments;
    return arr1.filter(item => !rest.includes(item))
}