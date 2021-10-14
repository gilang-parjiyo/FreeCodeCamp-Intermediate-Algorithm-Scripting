function convertHTML(str) {
    // Split string to character 
    let strTemp = str.split('')

    // loop trough string array to find character
    for (const index in strTemp) {
        switch (strTemp[index]) {
            case '<':
                strTemp[index] = '&lt;';
                break;
            case '>':
                strTemp[index] = '&gt;';
                break;
            case '&':
                strTemp[index] = 'amp;';
                break;
            case '"':
                strTemp[index] = '&quot;';
                break;
            case "'":
                strTemp[index] = '&apos;';
                break;
            default:
                break;
        }
    }

    // join string after HTML entities set.
    return strTemp.join('');

}

console.log(convertHTML("Dolce & Gabbana"));