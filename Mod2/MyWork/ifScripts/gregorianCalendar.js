/*
* Description: This script calculates leap year
*
* Author: Neo
*/
"use strict";

var checkYear = 2100;

function isLeapYear(year) {
    var check = false;

    //Check if divisible evenly by 4
    if (year % 4 == 0) 
    {
        //Check if also divisible evenly by 100
        if (year % 100 == 0) 
        {
            //Check if also divisible evenly by 400
            if (year % 400 == 0) {
                check = true;
            }
            else {
                check = false;
            }
        }
        else {
            check = true;
        }
    }
    else {
        check = false;
    }
    
    if (check) {
        return console.log("This is a leap year!");
    }
    else {
        return console.log("This is NOT a leap year!");
    }
}

isLeapYear(checkYear);