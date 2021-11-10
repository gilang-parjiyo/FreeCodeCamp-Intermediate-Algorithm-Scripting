function convertHTML(str) {
    let arrStr = str.split('');
    let entities = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;'
    }

    // loop trough string
    for (const char in arrStr) {
        // loop trough entities object
        for (const key in entities) {
            // Condition if match change the array
            if (arrStr[char] === key) {
                arrStr[char] = entities[key];
            }
        }
    }
    // join array after character changed to HTML entities
    return arrStr.join('');
}

convertHTML('Dolce & Gabana');
