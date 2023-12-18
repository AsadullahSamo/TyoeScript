// Generics make components (functions and arrays) reusable by allowing them to work with a variety of data types.
// Helps returning value from a function which we pass (like return string when we send string) (Not like any where we can send anything(like string) and get anything(like number))

function identityOne(val: boolean | number): boolean | number {
    if (typeof val === "number") {
        return val * 2;
    } else {
        return false;
    }
}

function identityTwo(val: any): any { // Take anything (like number) and return anything (like string)
    return val;
}

function identityThree<Type>(val: Type): Type {  // Take anything (like string) and once passed now will return type which is passed (like string)
    return val;
}

identityThree(3)  // returns 3 (number)
identityThree("3")  // returns "3" (string)

function identityFour<T>(val: T): T {  
    return val;
}

interface Bottle {
    brand: string;
    volume: number;
}

// Use below syntax when passing user defined data types
identityFour<Bottle>({ brand: "Aquafina", volume: 1 })  // returns { brand: "Bisleri", volume: 1 } (Bottle)

// function getSearchProducts<T>(products: T[]): T {
//     return products[3];
// }

// Arrow function equivalent of above function
// const getSearchProducts = <T>(products: T[]): T => {
//     return products[3];
// }


function someFunc<T, U>(val1: T, val2: U): object {
    return {
        val1,
        val2
    }
}

someFunc(3, 3) // 


interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    cart: T[] = [];
    addToCart(product: T) {
        this.cart.push(product);
    }
}