/*
Description: Amount of vans needed for people
*/
"use strict";

var vans;
var people = 38;

var cost = 250;

function getVans(people) {
    return Math.ceil(people / 15);
}

function getTotal(people) {

    return Math.ceil(people / 15) * cost;
}

function getPerPerson(people) {
    return (Math.ceil(people / 15) * cost) / people;
}

console.log(getVans(people));

console.log(getTotal(people));

console.log(Math.round(getPerPerson(people) * 100) / 100);