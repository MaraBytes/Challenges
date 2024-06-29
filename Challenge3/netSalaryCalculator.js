// Challenge 3: Net Salary Calculator
function calculateNetSalary() {
    const prompt = require('prompt-sync')();
    let basicSalary = parseFloat(prompt("Enter basic salary: "));
    let benefits = parseFloat(prompt("Enter benefits: "));

    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input. Please enter valid positive numbers for basic salary and benefits.");
        return;
    }

    const grossSalary = basicSalary + benefits;

    // PAYE calculation
    let payee;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        payee = 24000 * 0.10 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        payee = 24000 * 0.10 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        payee = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (grossSalary - 500000) * 0.325;
    } else {
        payee = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35;
    }

    // NHIF deduction
    let nhif;
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else if (grossSalary <= 44999) nhif = 1000;
    else if (grossSalary <= 49999) nhif = 1100;
    else if (grossSalary <= 59999) nhif = 1200;
    else if (grossSalary <= 69999) nhif = 1300;
    else if (grossSalary <= 79999) nhif = 1400;
    else if (grossSalary <= 89999) nhif = 1500;
    else if (grossSalary <= 99999) nhif = 1600;
    else nhif = 1700;

    // NSSF deduction
    const tier1Limit = 7000;
    const tier2Limit = 36000;
    const nssfRate = 0.06;
    let nssf;

    if (grossSalary <= tier1Limit) {
        nssf = grossSalary * nssfRate;
    } else if (grossSalary <= tier2Limit) {
        nssf = tier1Limit * nssfRate + (grossSalary - tier1Limit) * nssfRate;
    } else {
        nssf = tier1Limit * nssfRate + (tier2Limit - tier1Limit) * nssfRate;
    }

    // Affordable housing levy
    const housingLevyRate = 0.015;
    const housingLevy = grossSalary * housingLevyRate;

    // Net salary calculation
    const netSalary = grossSalary - payee - nhif - nssf - housingLevy;

    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`Payee (Tax): ${payee.toFixed(2)}`);
    console.log(`NHIF Deduction: ${nhif.toFixed(2)}`);
    console.log(`NSSF Deduction: ${nssf.toFixed(2)}`);
    console.log(`Housing Levy: ${housingLevy.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

calculateNetSalary();
