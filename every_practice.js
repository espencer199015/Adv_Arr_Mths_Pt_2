//hasOnlyOddNumbers

function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val % 2 !== 0;
    })
}

//hasNoDuplicates

function hasNoDuplicates(arr) {
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}

//hasCertainKey

function hasCertainKey(arr, key) {
    return arr.every(function(val){
        return key in val
    });
}

//hasCertainValue

function hasCertianValue(arr, key, findValue) {
    return arr.every(function(val) {
        return val[key] === findValue;
    });
}