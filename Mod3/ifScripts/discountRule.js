/*
* Description: This script calculates discount savings
*
* Author: Neo
*/
"use strict";

var original = 50.71;

function getTotal(spent) {
    var totalDue;
    var discount;
    var tax = .08;
    var taxTotal;

    //if less than 100
    if (spent < 100) {
        discount = 0;
    }

    //if less than 250
    else if (spent < 250) {
        discount = spent * .10;
    }

    //if higher than 250
    else {
        discount = spent * .20;
    }

    //Calculate totals
    taxTotal = (spent - discount) * tax;
    totalDue = spent - discount + taxTotal;

    console.log("Original amount: " + spent.toFixed(2)  
        + "\nDiscount: " + discount.toFixed(2)  
        + "\nTax: " + taxTotal.toFixed(2) 
        + "\nTotal: " + totalDue.toFixed(2));
}

getTotal(original);