/*
* Description: Converts Celsius to Farenheit and Farenheit to Celsius
*
* Author: Neo
*/
"use strict";

function getTemp() {
    let num = document.getElementById("num").value;
    num = parseFloat(num);
    return num;
}

function doFtoC() {
    let answer = document.getElementById("answer");
    answer.value = (getTemp() - 32) * 5/9;
}

function doCtoF() {
    let answer = document.getElementById("answer");
    answer.value = (getTemp() * 9 / 5) + 32;
}

windows.onload = function () {
    const convertFBtn = document.getElementsById("convertFBtn");
    const convertCBtn = document.getElementsById("convertCBtn");

    convertFBtn.onclick = doFtoC;
    convertCBtn.onclick = doCtoF;
};