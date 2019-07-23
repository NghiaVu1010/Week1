/*
* Description: This script greets you depending on time of day
*
* Author: Neo
*/
"use strict";

var currentHour = 10.5;

function greetingMessage() {
    var d = new Date();
    var time = d.getHours();

    if (time < 10) {
        console.log("Good Morning");
    }
    else if (time < 17) {
        console.log("Good day");
    }
    else if (time < 24) {
        console.log("Good evening!");
    }
    else {
        console.log("It's midnight, go to sleep!");
    }
}

greetingMessage();