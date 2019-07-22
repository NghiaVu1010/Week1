/*
Description: Currency calculator
*/
"use strict";

var usd = 100;
var exchange = {Euro : .89, Pound : .80, Rupee : 68.93, Australian : 1.42, Canadian : 1.31, Yen : 107.88};

function getExchangeCurrency(usd, currency) {
    var rate = exchange[currency];

    if (currency == "Euro") {
        console.log(usd + " USD converted to Euro is " + (usd * rate));
    } 
    else if (currency == "Pound") {
        console.log(usd + " USD converted to Pound is " + (usd * rate));
    }
    else if (currency == "Rupee") {
        console.log(usd + " USD converted to Rupee is " + (usd * rate));
    }
    else if (currency == "Australian") {
        console.log(usd + " USD converted to Australian is " + (usd * rate));
    }
    else if (currency == "Canadian") {
        console.log(usd + " USD converted to Canadian is " + (usd * rate));
    }
    else if (currency == "Yen") {
        console.log(usd + " USD converted to Yen is " + (usd * rate));
    } 
    else {
        console.log("You did not enter a valid selection!");
    }
}

getExchangeCurrency(usd, "Yen");