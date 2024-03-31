const reverseString = function(str) {
    const splitArr = str.split("");
    splitArr.reverse();
    let reverseStr = splitArr.join("");
    return reverseStr;
};

console.log(reverseString("hello"))


// Do not edit below this line
module.exports = reverseString;
