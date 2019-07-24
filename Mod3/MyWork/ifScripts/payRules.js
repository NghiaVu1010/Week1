/*
* Description: This script calculates pay
*
* Author: Neo
*/
"use strict";

var hoursWorked = 40.5;
var payRate = 10;

function calculatePay(hours, rate) {
    var totalPay;

    if (hours > 40) {
        var overtimePay = (hours - 40) * (rate * 1.5);
        var regPay = 40 * rate;
        
        totalPay = overtimePay + regPay;

        console.log("Your total pay is: " + totalPay.toFixed(2));
    }
    else {
        totalPay = hours * rate;

        console.log("Your total pay is: " + totalPay.toFixed(2));
    }
}

calculatePay(hoursWorked, payRate);