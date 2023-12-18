
type User = {
    name: String,
    email: string,
    isActive: boolean
}

function createUser(user: User): User {      // now its return value and parameter both are of type User which is object type
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive
    };
}

createUser({name: "Asad", email: "a@a.com", isActive: true})

export {}