// Union Types
//alias
type Combinable = number | string;

const combineValues = (
  input1: Combinable,
  input2: Combinable
): any => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combineAges = combineValues(50, 50);
console.log(combineAges);

const combinedNames = combineValues("Madhan ", "Mahadevan");
console.log(combinedNames);
