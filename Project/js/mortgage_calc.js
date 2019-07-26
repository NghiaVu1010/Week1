/*
* Description: Calculates mortgage payment
*
* Author: Neo
*/
"use strict";

window.onload = function() 
{
    const calcMortgageBtn = document.getElementById("calcMortgageBtn");
    calcMortgageBtn.onclick = calculateMortgagePayment;
    
    function calculateMortgagePayment() {
        //grab each of the values and assigns value
        let loan = parseFloat(document.getElementById("loanForm").value);
        let interest = parseFloat(document.getElementById("interestRateForm").value);
        let length = parseFloat(document.getElementById("lengthForm").value);
        let answer = document.getElementById("answer");
    
        //do mortgage calculations based on formula
        let monthlyRate = ((interest / 100) / 12) + 1;
        let totalPayments = length * 12;
        let mortgageRate = 1 - Math.pow(monthlyRate, -totalPayments);
        mortgageRate = (monthlyRate - 1) / mortgageRate;
    
        //assign value and insert to field
        let mortgagePayment = mortgageRate * loan;    
        answer.value = mortgagePayment.toFixed(2);
    }
};