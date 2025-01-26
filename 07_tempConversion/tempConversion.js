const convertToCelsius = function(temperature) {
  let conversion = (temperature - 32) * 5 / 9;
  let roundedConversion = Math.round(conversion * 10) / 10;
  return roundedConversion;
};

const convertToFahrenheit = function(temperature) {
  let conversion = (temperature * 9 / 5) + 32;
  let roundedConversion = Math.round(conversion * 10) / 10;
  return roundedConversion;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
