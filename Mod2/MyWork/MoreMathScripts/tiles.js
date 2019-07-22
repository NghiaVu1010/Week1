/*
Description: Amount of tile boxes you need for flooring
*/
"use strict";

var x = 23,
    y = 18;

function getTilesAmount(l, w) {
    var area = l * w;

    return Math.ceil(area / 12);
}

function getTilesExtra(l, w) {
    var area = l * w;

    return Math.ceil(((area * .10) + area) / 12);
}

console.log("You will need " + getTilesAmount(x,y) + " boxes. If you want 10% extra, you will need "
    + getTilesExtra(x, y) + " boxes.");