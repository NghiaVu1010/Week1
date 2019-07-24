/*
* Description: This script has many functions
*
* Author: Neo
*/
"use strict";

function displayMailingLabel(name, address, city, state, zip) {
    return console.log(name + "\nAddress: " + address + "\n" + city + ", " + state + " " + zip);
}

function addNumbers(num1, num2) {
    //calculate the sum with the 2 parameters
    var sum = num1 + num2;
    
    return console.log(num1 + " + " + num2 + " = " + sum);
}

function displayReceipt(totalDue, amountPaid) {
    //calculate the change due
    var changeDue = amountPaid - totalDue;

    if (changeDue < 0) {
        //changes to abs to get positive
        return console.log("You still owe: " + Math.abs(changeDue));
    }
    else {
        return console.log("Total Due: " + totalDue 
            + "\nAmount Paid: " + amountPaid 
            + "\nChange Due: " + changeDue);
    }
}

//displayMailingLabel("Neo", "690 Asylum Ave", "Hartford", "CT", "06105");
//addNumbers(1, 2);
displayReceipt(10, 9);