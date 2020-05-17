// Nested Objects & Types

enum Role {
    ADMIN = 10,
    DIRECTOR = 20,
    ACCOUNTANT = 30,
    PO = 40,
    PM = 50,
  }
const person = {
  name: "Madhan",
  age: 30,
};
console.log(person.age);

const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new", "item1", "item2", "item3"],
  role: Role.DIRECTOR,
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
console.log(product.price);
console.log(product.details.title);
// console.log(product.tags.splice(0,2));
//console.log(product.tags.slice(1,3));
//console.log(product.tags.concat('new'));

for (const tag of product.tags) {
  console.log("dffd :" + tag.toUpperCase());
}

// tuple
console.log(product.role);
//console.log(product.role.push("admin"));


