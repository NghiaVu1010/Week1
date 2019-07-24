/*
* Description: This script finds the min and max
*
* Author: Neo
*/
"use strict";

var x = 30, y = 20, z = 15;

function minMax(a, b, c) {
    var min, max;

    if (a < b && b < c) {
        max = c;
        min = a;
    }
    else if (c < b && b < a) {
        max = a;
        min = c;
    }
    else if (a < b && c < b){
        max = b;
        if (a < c) {
            min = a;
        }
        else {
            min = c;
        }
    }
    else if (b < a && b < c) {
        min = b;
        if (a < c) {
            max = c;
        }
        else {
            max = a;
        }
    }
    else {
        return console.log("Error unexpected. One number is repeated.")
    }

    console.log("Min is " + min + ". Max is " + max);

    //or just do this
    console.log(Math.min(a,b,c));
    console.log(Math.max(a,b,c));
}

minMax(x, y, z);