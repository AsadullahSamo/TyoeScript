function createUser({name, age}: {name: string, age: number}): { name: string; age: number;} {
    return {
        name,
        age
    };

    // return {
    //     name: name,
    //     age: age,
    //     email: "a@a.com" // Not allowed because we expect to return only name and age not email in return type
    // };   
}


function createUser2({name, age}: {name: string, age: number}): {} {
    return {
        name,
        age,
        email: "a@a.com" // Allowed because we expect to return object of any type  
    };
}

createUser({name: 'Asad', age: 19});
// createUser('Asad', 19, "a@a.com");    // Not allowed because we expect to pass only name and age not email in function
createUser2({name: 'Asad', age: 19})

// But the odd thing is that we can also pass more data than expected if we already have defined object
let userInfo = {name : "Asad", age: 19, email: "a@a.com"};
createUser2(userInfo);