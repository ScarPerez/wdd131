// Original array
let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

// Filter names that start with B
let namesB = names.filter(name => name.startsWith("B"));

console.log("Names beginning with B:");
console.log(namesB);

// Map each name to its length
let namesLength = names.map(name => name.length);

console.log("Length of each name:");
console.log(namesLength);

// Calculate the average length
let averageLength =
names.reduce((total, name) => total + name.length, 0) / names.length;

console.log("Average name length:");
console.log(averageLength);