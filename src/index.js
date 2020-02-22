module.exports = function reverse (n) {
    const tempArr = String(n).split("");
    const prepareArr = tempArr.filter(item => item !== "-");
    return prepareArr.reverse().join("");
}
