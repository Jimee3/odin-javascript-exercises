const removeFromArray = function(array, ...targets) {
    for (target of targets) {
        for (let i = array.length -1; i >= 0; i--) {
            if (array[i] === target) array.splice(array.indexOf(array[i]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
