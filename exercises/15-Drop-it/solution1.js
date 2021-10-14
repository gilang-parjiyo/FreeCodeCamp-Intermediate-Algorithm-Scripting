function dropElements(arr, func) {
   let i = 0; 
    while (arr.length && !func(arr[i])) {
        arr.shift();
    }
    return arr;
}