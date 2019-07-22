/*
Description: Distance between 2 points
*/
"use strict";

function getDistance(x1, y1, x2, y2) {
    var xTotal = Math.pow(x2-x1, 2);
    var yTotal = Math.pow(y2-y1, 2);
    var dTotal = Math.sqrt(xTotal + yTotal);

    return dTotal;
}

console.log("The distance between these 2 points are " + getDistance(1,1,5,4));