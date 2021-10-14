function dropElements(arr, func, i = 0) {
    return arr.length && !func(arr[i]) ?
        dropElements(arr.slice(i + 1), func, i)
        : arr;
}