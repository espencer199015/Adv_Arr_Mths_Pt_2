//hasOddNumber

function hasOddNumber(arr) {
    return arr.some(function(val){
        return val % 2 !== 0;
    })
}

//hasAZero

function hasAZero(num) {
    return num.toString().split('').some(function(val){
        return val === '0';
    })
}