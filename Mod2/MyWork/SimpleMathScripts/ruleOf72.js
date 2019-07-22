"use strict";

var interestRate = 1.5;
var account = 100000;

function investment(IR) {
    var years = 72 / IR;
    return years.toFixed(2);
}

console.log("At a " + interestRate + " interest rate, your savings account will be worth " 
    + account*2 + " in " + investment(interestRate) + " years.");