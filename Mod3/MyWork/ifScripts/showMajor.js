/*
* Description: This script grabs your major
*
* Author: Neo
*/
"use strict";

var studentName = "Betty";
var studentMajor = "CsCi";

function lookUpMajor(major) {
    var majorName;
    var departOffice;

    switch(major.toUpperCase()) {
        case "BIOL":
            majorName = "Biology";
            departOffice = "Science Bldg, Room 310";
            break;
        case "CSCI":
            majorName = "Computer Science";
            departOffice = "Sheppard Hall, Room 314";
            break;
        case "ENG":
            majorName = "English";
            departOffice = "Ker Hall, 201";
            break;
        case "HIST":
            majorName = "History";
            departOffice = "Kerr Hall, Room 114";
            break;
        case "MKT":
            majorName = "Marketing";
            departOffice = "Westly Hall, Room 310";
            break;
        default:
            majorName = "unknown";
            departOffice = "unknown";
            break;
    }

    return console.log("Student: " + studentName 
        + "\nMajor: " + majorName
        + "\nAdvising Location: " + departOffice);
}

lookUpMajor(studentMajor);