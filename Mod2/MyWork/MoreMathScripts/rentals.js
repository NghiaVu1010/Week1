/*
Description: Amount of vans needed for people
*/
"use strict";

var people = 38;

function getVans(people) {
    var vans = 15;

    return Math.ceil(people / vans);
}

function getTotal(people) {
    var cost = 250;

    return getVans(people) * cost;
}

function getPerPerson(people) {
    return getTotal(people) / people;
}

console.log("You have " + people + " people and need " + getVans(people) + " van(s)");

console.log("The total cost is " + getTotal(people));

console.log("Total split per person is " + Math.round(getPerPerson(people) * 100) / 100);