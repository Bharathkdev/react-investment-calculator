/* This function expects a JS object as an argument
The object should contain the following properties
- initialInvestment: The initial investment amount
- annualInvestment: The amount invested every year
- expectedReturn: The expected (annual) rate of return
- duration: The investment duration (time frame)
*/
export const calculateInvestmentResults = ({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) => {
  const annualData = [];
  let investmentValue = initialInvestment,
    initialAmount = 0;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    let totalInterest = 0;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;

    if (i === 0) {
      initialAmount = investmentValue - interestEarnedInYear - annualInvestment;
    }

    totalInterest = investmentValue - annualInvestment * year - initialAmount;

    annualData.push({
      year, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
      totalInterest, // total Interest for the year
      totalAmountInvested: investmentValue - totalInterest, // total amount invested in the year
    });
  }

  return annualData;
};

/* The browser-provided Intl API is used to prepare a formatter object
This object offers a "format()" method that can be used to format numbers as currency
Example Usage: formatter.format(1000) => yields "$1,000"
*/
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
