/*
* Description: Converts Farenheit to celsius
*
* Author: Neo
*/
"use strict";

function getFarenheitConversion(f) {
    return (f - 32) * 5/9;
}

console.log(getFarenheitConversion(72));

let a = 5;

function test() {
    let a = 6;
    function again() {
        let a = 7;
        console.log(a);
    }
    again();
    console.log(a);
}
test();
console.log(a);