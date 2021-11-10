function convertHTML(str) {
    // Object to hold values entities
    let entities = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;'
    }

    // using map to replaces matches string with entities
    return str.split('')
        .map(entity => entities[entity] || entity)
        .join('');
}

convertHTML('Hamburgers < Pizza < Tacos');