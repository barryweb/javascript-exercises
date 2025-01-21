const reverseString = function(str) {
    let splitString = str.split("");
    let reverseArr = splitString.reverse();
    let joinArr = reverseArr.join("");
    return joinArr;
};
// Do not edit below this line
module.exports = reverseString;
