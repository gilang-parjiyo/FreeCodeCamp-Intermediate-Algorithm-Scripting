function convertHTML(str) {
    let entities = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;'
    }
    return str.replace(/[<>&"']/g, (entity) => entities[entity])
}

console.log(convertHTML('Dolce & Gabana'));