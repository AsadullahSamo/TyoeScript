interface myUser {
    readonly dbID: number
    email: string
    userId: number
    googleId?: string
    sayHi: () => string
    sayBye?: () => string   // Optional
}

// Reopeneing interfaces -> Adding more values to interface
interface myUser {
    name: string
}

let myUser: myUser = {
    name: "Asad",
    dbID: 1,
    email: "a@a.com",
    userId: 2211,
    sayHi: () => { return "Hi!" }
}

myUser.email = "b@b.com"
// myUser.dbID = 2;    // Not allowed because of readonly

// Extending interface (Inheritance)
interface Admin extends myUser {
    role: "admin" | "ta" | "professor"
}


const myAdmin: Admin = {    
    dbID: 1,
    email: "admin@gmail.com",
    userId: 21,
    role: "admin",
    // role: "Admin" // Not allowed (Only admin, ta, professor allowed)
    name: "Admin",
    sayHi: () => { return "Hi!" }
}

// With type aliases we can use inheritance like following
// type Admin = myUser & {

// }
 