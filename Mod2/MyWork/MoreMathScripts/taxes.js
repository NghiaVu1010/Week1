/*
Description: Amount witheld from taxes
*/
"use strict";

var x;
var tax = .23;

function getWitheld(x) {
    return x * tax;
}

console.log("Amount witheld from taxes is " + getWitheld(1200));