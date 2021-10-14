function diffArray(arr1, arr2) {
    let newArr = []
    function onlyInFirst(first, second) {
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]))
                newArr.push(first[i]);
        }
        return newArr;
    }
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
    return newArr;
}