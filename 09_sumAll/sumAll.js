const sumAll = function(a, b) {
    if (typeof a != "number" || typeof b != "number") return "ERROR";
    if (a < 0 || b < 0) return "ERROR";
    if (a != Math.floor(a) || b != Math.floor(b)) return "ERROR";
    
    let start
    // the if statement checks which parameter is bigger
    if (b < a) {
        start = b;
        end = a
    } else {
        start = a;
        end = b
    }

    for (let i = start + 1; i <= end; i++){
        start += i;
    }
    return start;
};

// Do not edit below this line
module.exports = sumAll;
