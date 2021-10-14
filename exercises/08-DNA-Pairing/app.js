function pairElement(element) {
    let output = [];
    let pairing = {
        A: ['A', 'T'],
        T: ['T', 'A'],
        C: ['C', 'G'],
        G: ['G', 'C'],
    }
    for (const key in element) {
            output.push(pairing[element[key]])
    }
    return output
}