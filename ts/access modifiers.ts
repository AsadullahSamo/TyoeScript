class User {
    email: string
    name: string
    private readonly city: string = "Tando Allahyar"
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }

    // GETTERS AND SETTERS
    private courseCount = 1
    protected count = 2    // Accessible in child but not outside
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get getCourseCount(): number {
        return this.courseCount
    }
    set setCourseCount(courseNum){
        // Can't have return type annotation (like void, number, string etc)
        if(courseNum <=1) {
            throw new Error("Course count should be more than 1")
        }
        this.courseCount = courseNum;
    }
}

// Shortcut of above (Excluding getters and setters)
// class User {
//     private readonly city: string = "Tando Allahyar"
//     constructor(
//         public email: string,
//         name: string
//     ){}
// }

const user = new User("Asad", "a@gmail.com")
// user.city = "TAY" // can't assign due to readonly and can't access outside of class due to private

// protected
class SubUser extends User {
    isFamily: boolean = true
    seeEffect(){
        // this.courseCount = 4
        this.count = 2;   
    }
}


