/*
* Description: This script tests various numeric conversion techniques
*
* Author: Neo
*/
"use strict";

var a = " 101.1 ";
var b = "402 Stevens"
var c = "Number 5";
var d = "55";

function parseString(value) {
    var iResult = parseInt(value);
    var fResult = parseFloat(value);
    var nResult = Number(value);
    
    return console.log("Using \"" + value + "\", the parseInt() result is " + iResult + 
        ". The parseFloat() result is " + fResult + ". The Number() result is " + nResult);
}

parseString(b);