const loanAmt = document.getElementById("loan-amount");
const interestRate = document.getElementById("interest-rate");
const monthEle = document.getElementById("months-to-pay");
// const resultEle = document.getElementById("emi-result"); // Assuming you have an element to display the result

function handleChange() {
    const loanAmountValue = loanAmt.value;
  
    const interestRateValue = interestRate.value;
  
   const  MonthsToPayValue = monthEle.value;
  
    interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;
  
    monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);
  
    document.getElementById(
      "payment"
    ).innerText = `Monthly Payment: ${monthlyPayment}`;
  }

// // Add event listeners (if needed)
// loanAmt.addEventListener("input", handleChange);
// interestRate.addEventListener("input", handleChange);
// monthEle.addEventListener("input", handleChange);
