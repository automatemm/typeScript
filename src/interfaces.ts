interface Named {
  name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string): void {
    console.log(phrase + ": " + this.name);
  }
}

let user1: Greetable;
user1 = new Person('Madhan');
user1.greet("Hiya, this is greetings!");
console.log(user1);

interface AddFunction {
  (n1: number, n2: number): number;
}

let add: AddFunction;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(10, 20));
