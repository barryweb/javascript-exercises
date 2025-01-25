const removeFromArray = function(array, ...args) {
    const newArr = [];
    for (const elem of array) {
        if (!args.includes(elem)) {
            newArr.push(elem);
        }
    }
    return newArr;
};
// Do not edit below this line
module.exports = removeFromArray;
