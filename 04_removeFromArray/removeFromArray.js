const removeFromArray = function(arr, ...args) {
    const finalArr = []
    for (i = 0; i <= arr.length-1; i++){
        if(!args.includes(arr[i])){
            finalArr.push(arr[i])
            console.log(arr[i])
        }
    }
    return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
