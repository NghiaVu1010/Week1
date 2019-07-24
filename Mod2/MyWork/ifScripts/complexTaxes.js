/*
* Description: This script files your taxes
*
* Author: Neo
*/
"use strict";

var taxableIncome = 35000;
var filingStatus = "Single";

function fileTax(income, status) {
    var taxRate, netIncome;

    switch(status) {
        case "Single":
            if (income < 12000) { taxRate = .05; }
            else if (income < 25000) { taxRate = .10; }
            else if (income < 75000) { taxRate = .15; }
            else { taxRate = .20; }
            break;
        case "Joint":
            if (income < 12000) { taxRate = .00; }
            else if (income < 25000) { taxRate = .06; }
            else if (income < 75000) { taxRate = .11; }
            else { taxRate = .20; }
            break;
        default: 
            console.log("Status error");
    }

    netIncome = income - (income * taxRate);

    return console.log("Your net income filing " + status + " is " + netIncome);
}

fileTax(taxableIncome, filingStatus);