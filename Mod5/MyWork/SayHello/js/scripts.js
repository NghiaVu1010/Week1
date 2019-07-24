/*
* Description: Greets the user
*
* Author: Neo
*/
"use strict";

function greetUser() {
    const name = document.getElementById("name").value;
    alert("Hello " + name + "!");
}

function init() {
    const btn = document.getElementById("greetBtn");
    btn.onclick = greetUser;
}

windows.onload = init;