// Generic Function
function merge1<OBJ1 extends string, OBJ2 extends number | string>(
  a: OBJ1,
  b: OBJ2
) {
  return Object.assign(a, b);
}

function merge2<OBJ1 extends Person, OBJ2 extends Named>(a: OBJ1, b: OBJ2) {
  return Object.assign(a, b);
}

function merge<OBJ1 extends object, OBJ2 extends object>(a: OBJ1, b: OBJ2) {
  return Object.assign(a, b);
}

const mergedObject = merge(
  { name: "Madhan", hobbies: ["Running", "Reading"] },
  { age: 30 }
);

console.log(mergedObject.hobbies[0]);
console.log(mergedObject.name);
console.log(mergedObject.age);

//
interface Lengthy {
  length: number;
}

function countAndDescribe<E extends Lengthy>(element: E): [E, string] {
  let descText = "Got no value.";
  if (element.length === 1) {
    descText = "Got 1 element.";
  } else if (element.length > 1) {
    descText = "Got " + element.length + " elements.";
  }
  return [element, descText];
}

console.log(countAndDescribe("")); // no value
console.log(countAndDescribe("Madhan")); // String
console.log(countAndDescribe(["Madhan", "Deva"])); // array

// keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Max" }, "name"));

// Generic Class

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Madhan");
textStorage.addItem("Deva");
textStorage.addItem("Nivi");
textStorage.removeItem("Deva");
console.log(textStorage.getItems());

const numStorage = new DataStorage<number>();
numStorage.addItem(199000);
numStorage.addItem(1961);
numStorage.addItem(1991);
numStorage.removeItem(1961);
console.log(numStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
//names.push('Manu');
// names.pop();
