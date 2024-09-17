const repeatString = function(string,loop) {
    if(loop<0){
        return "ERROR";
    }
    let repeatedString="";
    for(let i=0;i<loop;i++){
        repeatedString=repeatedString.concat(string);
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
