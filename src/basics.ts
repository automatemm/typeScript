const addNumbers = (
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
): number => {
  const total = n1 + n2;
  if (showResult) {
    console.log(phrase + total);
  } else {
    return total;
  }
};
let num1: number;
num1 = 4000;
const num2 = 200;
const printResult = true;
const resultPhrase = "Result is: ";
addNumbers(num1, num2, printResult, resultPhrase);

