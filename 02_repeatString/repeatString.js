const repeatString = function(string, number) {
    if (number < 0) {
        return "ERROR";
    }
    if (string === '') {
        return string;
    }
    return string.repeat(number);
};
// console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
