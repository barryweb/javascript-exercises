const sumAll = function(startNum, endNum) {
    if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) {
        return "ERROR";
    }
    if (startNum < 0 || endNum < 0) {
        return "ERROR";
    }
    if (startNum > endNum) {
        const x = startNum;
        startNum = endNum;
        endNum = x;
    }
    
    let finalSum = 0;
    for (let i = startNum; i <= endNum; i++) {
        finalSum += i;
    }
    return finalSum;
}
// Do not edit below this line
module.exports = sumAll;
