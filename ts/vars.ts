// Syntax: let varName: type = value;
let myName: string = 'Asad';
let myAge = 22;     // Use like this for number and boolean types
let heroes = ['Superman', 'Batman', 'Ironman'];    // No need to explicitly specify the type of array also

console.log(heroes.map((hero): string => hero.toUpperCase())) // Better to specify the return type of function


// myName = 30; // Error: Type '30' is not assignable to type 'string'.
myName.toUpperCase(); // Suggest string methods
console.log(myName);

export {};

// ANY TYPE in TypeScript
// When you don't specify the type of variable and assign a value to it, TypeScript will automatically assign the type of that variable to any.

// let car = 'BMW';

// Using any is not recommended as it defeats the purpose of using TypeScript.
// Use any with only number and boolean types because TypeScript is smart enough to know the type of variable.