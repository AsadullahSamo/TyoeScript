// function addTwoNumbers(a: number, b: number) {
//     // a.toUpperCase(); // Now string methods are not allowed
//        return "Hello"; // But allowed because of any type of return value
// }

// To avoid above case we can specify the return type of function
function addTwoNumbers(a: number, b: number): number {
    return a + b;
    // return "Hello"; // Now not allowed
}

function getUpperCase(str: string) {
    return str.toUpperCase();
}

function signUpUser(username: string, email: string, isPaid: boolean) {
    // Signup user
    console.log(username, email, isPaid);
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwoNumbers(2, 5); 
getUpperCase('Asad');
signUpUser('Asad', 'asad@example.com" ', true); 
loginUser('Asad', "abc@example.com")


function getValues<T>(data: T) {
    return data;
}


// Specifying return type of function
function getNum(num: number): number {
    // return "Hello"; // Not allowed
    return num;
}
function getString(string: string): string {
    return string;
}

getNum(2);
getString('Asad');

// getNum('Asad'); // Not allowed
