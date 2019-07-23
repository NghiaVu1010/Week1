/*
* Description: This script greets you depending on time of day
*
* Author: Neo
*/
"use strict";

var currentHour = 10.5;

function greetingMessage(time) {
    if (time < 10) {
        console.log("Good Morning");
    }
    else if (time < 17) {
        console.log("Good day");
    }
    else if (time <24) {
        console.log("Good evening!");
    }
    else if ((time == 0) || (time == 24)) {
        console.log("It's midnight, go to sleep!");
    }
    else {
        console.log("You entered a wrong time.");
    }
}

greetingMessage(currentHour);