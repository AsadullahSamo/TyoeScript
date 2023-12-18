// READONLY AND OPTIONAL in TS
// Readonly

type User = {  
    readonly _id: string     // can't be changed
    readonly name: string
    email: string
    isActive: boolean
    cardDate?: string    // optional to be passed
}


let myUser: User = {
    _id: '123',
    name: 'Asad',
    email: 'a@a.com',
    isActive: true
}

myUser.email = "b@b.com"
// myUser._id = 456  // Can't assign value to _id because it is readonly

type cardNumber = {
    cardNum: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

// We've to provide all three properties to the cardDetails object. This is not best scenario to use & but as 
// project grows, we'll may need this

let myCard: cardDetails = {
    cardNum: '1234',
    cardDate: '12/23',
    cvv: 123
}