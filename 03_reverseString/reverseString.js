const reverseString = function(string) {
    // let length=string.length;
    // let returnString='';
    // for(let i=length-1; i >= 0 ;i--){
    //     returnString=returnString.concat(string.charAt(i));
    // }   
    // return returnString;

    const chars=string.split("");
    chars.reverse();
    return chars.join("");

};

// Do not edit below this line
module.exports = reverseString;
