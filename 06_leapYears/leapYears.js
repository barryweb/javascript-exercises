const leapYears = function(year) {
    const yearDivisibleByFour = year % 4 === 0;
    const century = year % 100 === 0;
    const yearDivisibleByFourHundred = year % 400 === 0;

    if ( yearDivisibleByFour && (!century || yearDivisibleByFourHundred))
    {
        return true;
    }
    else 
    {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
