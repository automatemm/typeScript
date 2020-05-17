const fetchedUserData = {
    id: 'u1',
    name: 'Nivi',
    job: { title: 'CEO', description: 'My own company'}
};

console.log(fetchedUserData);
console.log(fetchedUserData.name);
console.log(fetchedUserData.job.title);

// Nullish Coalasing
//const userInput = '';
//const userInput = undefined // this will get default value;
const userInput = 'Madhan';

const storedData = userInput ?? 'Default';

console.log(storedData);