"use strict";

var foodBill = 79.25;

function tipAmount(total, tipPercent) {
    var tip = total * tipPercent;
    return tip.toFixed(2);
}

console.log("The tip on a " + foodBill + " food bill is " + tipAmount(foodBill, .15));