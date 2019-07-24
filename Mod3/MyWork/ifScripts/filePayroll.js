/*
* Description: This script files your taxes
*
* Author: Neo
*/
"use strict";

var taxableIncome;
var filingStatus = "Single";
var hoursWorked = 41;
var payRate = 10;
var ssRate = .062;
var medRate = .0145;
var total;

//Calculate pay from hours worked times pay
function calculatePay(hours, rate) {
    var totalPay;

    //if overtime is worked
    if (hours > 40) {
        var overtimePay = (hours - 40) * (rate * 1.5);
        var regPay = 40 * rate;
        totalPay = overtimePay + regPay;

        return totalPay.toFixed(2);
    }
    //else 40 or less
    else {
        totalPay = hours * rate;

        return totalPay.toFixed(2);
    }
}

//multiply by 52 for year
taxableIncome = calculatePay(hoursWorked, payRate) * 52;

//file taxes dependant on income and status
function fileTax(income, status) {
    var taxRate, netIncome;

    //find taxRate
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
    //return netIncome
    return netIncome;
}

//calculations between SS rate and Med Rate, then minus from filed tax
total = fileTax(taxableIncome, filingStatus) - (taxableIncome * ssRate) - (taxableIncome * medRate)
console.log(total.toFixed(2));