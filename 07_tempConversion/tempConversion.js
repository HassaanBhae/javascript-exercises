const convertToCelsius = function(F) {
  let C = (5/9) * (F - 32);
  if(C===0){
    return C;
  }
  return Number((C.toFixed(1)));
};

const convertToFahrenheit = function(C) {
  let F = (9/5) * C + 32;
  if(F===0){
    return F;
  }
  return parseFloat(F.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
