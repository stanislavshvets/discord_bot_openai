module.exports = (str) => {
    const regex =
        /[\(\)\[\]\{\}\+\-\*\%\/@#\$%\*\(\)_=\^&\|\\\u00a1-\uFFFF\s\.,!?:;"'<>]|\w+/g;
    let match;
    let tokenCount = 0;

    while ((match = regex.exec(str)) !== null) {
        tokenCount++
    }

    return tokenCount;
}