function myReplace(sentence, before, after) {
    // find index before in sentence
    let index = sentence.indexOf(before);
    // Check first character upper or lower case :
    if (sentence[index] === before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1);
    } else {
        after = after[0].toLowerCase() + after.slice(1);
    }
    //Replace before with after after check upper or lower case:
    return sentence.replace(before, after);
}