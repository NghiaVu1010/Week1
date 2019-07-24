/*
* Description: This script finds your deparment name
*
* Author: Neo
*/
"use strict";

var departmentCode = 5;

function lookUpDepartment(code) {
    var depName;

    //Uses code to find deparment name
    switch(code) {
        case 1:
            depName = "Marketing";
            break;
        case 5:
            depName = "Human Resources";
            break;
        case 10:
            depName = "Accounting";
            break;
        case 12:
            depName = "Legal";
            break;
        case 18:
            depName = "IT";
            break;
        case 20:
            depName = "Customer Relations";
            break;
        default:
            depName = "unknown";
            break;
    }

    return console.log("Department Name: " + depName);
}

lookUpDepartment(departmentCode);