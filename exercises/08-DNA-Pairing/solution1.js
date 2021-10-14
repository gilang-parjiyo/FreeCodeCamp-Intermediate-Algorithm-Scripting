function pairElement(element) {
    let output = []
    for (const elem in element) {
        switch (element[elem]) {
            case 'A':
                output.push(['A', 'T']);
                break;
            case 'T':
                output.push(['T', 'A']);
                break;
            case 'C':
                output.push(['C', 'G']);
                break;
            case 'G':
                output.push(['G', 'C']);
                break;
            default:
                output = [];
                break;
        }
    }
    return output;
}