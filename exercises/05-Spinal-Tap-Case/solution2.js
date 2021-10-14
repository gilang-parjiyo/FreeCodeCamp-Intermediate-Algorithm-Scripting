function spinalCase(string) {
    return string.split(/\s+|_+|(?=[A-Z])/).join('-').toLowerCase();
}