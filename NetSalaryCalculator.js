//Write a program whose major task is to calculate an individual’s 
//Net Salary by getting the inputs of basic salary and benefits. 
//Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

//NB: Use KRA, NHIF, and NSSF values provided in the link below.
let inputSalary = prompt("Enter Basic Salary :");
let inputBenefits = prompt("Enter Benefits :");
let nhif

//Calculate Payee
function calculatePayee(inputSalary){
    if ((inputSalary >= 0) && (inputSalary < 24001)){
    paye=0.1*inputSalary;
    return paye;
}
else if (inputSalary < 32334){
    paye=0.25*inputSalary;
    return paye;
}
else if (inputSalary < 500001){
    paye=0.3*inputSalary;
    return paye;
}
else if (inputSalary < 800000){
    paye=0.325*inputSalary;
    return paye;
}
else if (inputSalary > 800000){
    paye=0.35*inputSalary;
    return paye;
}
else{
    return "Invalid Input"
}
}



//Calculate NHIF Deductions
function nhifDeductions(inputSalary){
      switch (true) { 
        case inputSalary <= 5999:
            nhif = 150;
            return nhif;
        case inputSalary <= 7999:
            nhif=300;
            return nhif;
        case inputSalary <= 11999:
            nhif= 400;
            return nhif;
        case inputSalary <= 14999:
            nhif= 500; 
            return nhif;
        case inputSalary <= 19999:
            nhif= 600;
            return nhif;
        case inputSalary <= 24999:
            nhif= 750;
            return nhif;
        case inputSalary <= 29999:
            nhif= 850;
            return nhif;
        case inputSalary <= 34999:
            nhif= 900;
            return nhif;
        case inputSalary <= 39999:
            nhif= 950;
            return nhif;
        case inputSalary <= 44999:
            nhif= 1000;
            return nhif;
        case inputSalary <= 49999:
            nhif= 1100;
            return nhif;
        case inputSalary <= 59999:
            nhif= 1200;
            return nhif;
        case inputSalary <= 69999:
            nhif = 1300;
            return nhif;
        case inputSalary <= 79999:
            nhif= 1400;
            return nhif;
        case inputSalary <= 89999:
            nhif= 1500;
            return nhif;
        case inputSalary <= 99999:
            nhif=1600;
            return nhif;
        case inputSalary >= 100000:
             nhif= 1700; 
            return nhif;           
        default:
            return; 
    }
}


//Calculate NSSF Deductions
function nssfDeductions(inputSalary){
   const nssfRates = 0.06;
    
    if (inputSalary >= 18000) {
        nssfDeductions = 1080;
        return nssfDeductions

    } else {
        nssfDeductions = nssfRates * inputSalary;
        return nssfDeductions;
    }
}

//Calculate Gross salary


//Calculate Net salary