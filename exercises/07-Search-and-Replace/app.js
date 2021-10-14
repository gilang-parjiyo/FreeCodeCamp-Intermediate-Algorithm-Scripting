function myReplace(sentence, before, after) {
    let regex = new RegExp(before, 'i')
    return before[0] === before[0].toUpperCase()
        ? sentence.replace(regex, after[0].toUpperCase() + after.slice(1))
        : sentence.replace(regex, after[0].toLowerCase() + after.slice(1));
}


console.log(myReplace("Let us go to the Store", "Store", "mall"));