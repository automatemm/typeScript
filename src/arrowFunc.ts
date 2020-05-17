const add = (a: number, b: number) => a + b;
const printOutput: (a: number | string) => void = (output) => console.log(output);
printOutput(add(5, 2));

// default parameter
const add1 = (a: number, b: number = 1) => a + b;
const printOutput1: (a: number | string) => void = output => console.log(output);
printOutput(add1(10));