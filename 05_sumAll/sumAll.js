const sumAll = function(val1, val2){
    let sum = 0;
    if ((val1 > 0 && val2 > 0) && (val1 < val2) && (val1 === Number && val2 === Number)){
        for (let i = val1; i <= val2; i++){
            sum += i;
        };
    } else if ((val1 > 0 && val2 > 0) && (val1 > val2) && (val1 === Number && val2 === Number)){
        for (let i = val2; i <= val1; i++){
            sum += i;
        };
    }else{
        return "ERROR";
    }
    return sum;
}


// Do not edit below this line
module.exports = sumAll;
