/*
* Description: Simple calculator
*
* Author: Neo
*/
"use strict";

function getFirstValue() {
    let num1 = document.getElementById("num1").value;
    num1 = parseFloat(num1);
    return num1;
}

function getSecondValue() {
    let num2 = document.getElementById("num2").value;
    num2 = parseFloat(num2);
    return num2;
}

function doAdd() {
    let answer = document.getElementById("answer");
    answer.value = getFirstValue() + getSecondValue();
}

function doSub() {
    let answer = document.getElementById("answer");
    answer.value = getFirstValue() - getSecondValue();
}

function doMul() {
    let answer = document.getElementById("answer");
    answer.value = getFirstValue() * getSecondValue();
}

function doDiv() {
    let answer = document.getElementById("answer");
    answer.value = getFirstValue() / getSecondValue();
}

windows.onload = function () {
    const addBtn = document.getElementsById("addBtn");
    const subtractBtn = document.getElementsById("subtractBtn");
    const multiplyBtn = document.getElementsById("multiplyBtn");
    const divideBtn = document.getElementsById("divideBtn");

    addBtn.onclick = doAdd;
    subtractBtn.onclick = doSub;
    multiplyBtn.onclick = doMul;
    divideBtn.onclick = doDiv;
};