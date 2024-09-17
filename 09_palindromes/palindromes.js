const palindromes = function (string) {
    string=string.toLowerCase();
    string=string.replace(/!/g,"");
    string=string.replace(/ /g,"");
    string=string.replace(/,/g,"");
    string=string.replace(/\./g,"");
    let palindrome=string;
    string=string.split("").reverse().join("");
    if (palindrome===string) return true; else return false;
};
module.exports = palindromes;
