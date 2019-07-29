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
        let monthlyPayment = document.getElementById("monthlyPayment");
        let totalLoan = document.getElementById("totalLoan");

        //do mortgage calculations based on formula
        let monthlyRate = ((interest / 100) / 12) + 1;
        let totalPayments = length * 12;
        let mortgageRate = 1 - Math.pow(monthlyRate, -totalPayments);
        mortgageRate = (monthlyRate - 1) / mortgageRate;
    
        //assign value and insert to field for monthly payments
        let mortgagePayment = mortgageRate * loan;
        monthlyPayment.value = mortgagePayment.toFixed(2);
        
        //assign value and insert to field for total payments
        totalLoan.value = (mortgagePayment * totalPayments).toFixed(2);
    }

    var resetBtn = document.getElementById('resetBtn');

    // Bind Click Event Handler to Reset Buttom
    resetBtn.onclick = function() {
        // Put cursor in First Name field
        document.getElementById('loanForm').focus();
    }
};