const leapYears1 = function(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return true
        }
    }
    else {
        return false
    }
};

const leapYears = function(year) {
    const isDivisbleBy4 = year % 4 == 0
    const isDivisbleBy100 = year % 100 == 0
    const isDivisibleBy400 = year % 400 == 0

    if (isDivisbleBy4 && !isDivisbleBy100 || isDivisibleBy400){
        return true
    }
    else {
        return false
    }
}

// Do not edit below this line
module.exports = leapYears;
