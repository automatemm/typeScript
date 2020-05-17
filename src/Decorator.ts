function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Personn {
  name = "Madhan";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Personn();

console.log(pers);
