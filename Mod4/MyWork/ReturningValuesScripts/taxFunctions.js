/*
* Description: Converts Celsius to Farenheit
*
* Author: Neo
*/
"use strict";

//calculate social security tax
function getSocSecTax(grossPay) {
    return grossPay * .062;
}

//calculate medicare tax
function getMedicareTax(grossPay) {
    return grossPay * .0145;
}

//calculate federal tax
function getFederalTax(grossPay, withheldCode) {
    var taxRate;
    
    if (withheldCode >= 4) {
        taxRate = .18 - ((withheldCode - 4) *.05);
    }
    else if (withheldCode = 3) {
        taxRate = .185;
    }
    else if (withheldCode = 2) {
        taxRate = .195;
    }
    else if (withheldCode = 1) {
        taxRate = .21;
    }
    else {
        taxRate = .23;
    }

    return grossPay * taxRate;
}

var grossIncome = 1500;
var withholdingCode = 2;
var netIncome;

//call each function and set value to variable
var ssTax = getSocSecTax(grossIncome).toFixed(2);
var medTax = getMedicareTax(grossIncome).toFixed(2);
var fedTax = getFederalTax(grossIncome, withholdingCode).toFixed(2);

//math
netIncome = grossIncome - ssTax - medTax - fedTax;

//results
console.log("Gross Pay: " + grossIncome + " Withholding Code: " + withholdingCode 
    + "\nSocial Security Tax: " + ssTax + "\nMedicare Tax: " + medTax 
    + "\nFederal Tax: " + fedTax + "\nNet Income: " + netIncome);