// An array with some restrictions
// It restrics the order of the elements in the array

let user: [string, number, boolean]
user =  ['Asad', 25, true];    // Allowed
// user  = ['Asad', 25, true, false];  // Must be 3 elements (>3 not allowed)
// user = [25, 'Asad', true];  // Not allowed, order must be string, number, boolean

// Worst thing to note is that
user.push("Junaid");      // allowed, even though we defined restrictions of only 3 elements
// Also pop(), unshift(), shift(), and spliced() are allowed even though restrictions are defined


// Usecase
let rgb: readonly [number, number, number] = [255, 0, 0];   // Red
// rgb.push(245);  // Not Allowed and solved push() problem
