const hobbies = ["Sports", "Gardening"];
const activeHobbies = ["Swimming"];

// spread operator
activeHobbies.push(...hobbies);
console.log(activeHobbies);

// rest parameters - useful if we have unlimited amount of args
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
