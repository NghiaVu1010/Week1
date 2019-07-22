/*
Description: Converts Farenheit to Celsius
*/
"use strict";

function getFarenheitConversion(f) {
    return (f -32) * 5/9;
}

console.log("Farenheit converted to celsius is " + getFarenheitConversion(89));