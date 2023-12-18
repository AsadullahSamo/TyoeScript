// Can't create object(instance) of abstract class
// But can create object of child classes who inherit abstract class
// Abstract class can have abstract methods and non-abstract methods
// All Abstract methods must be implemented in child class

abstract class TakePhoto {
    constructor(
        cameraMode: string,
        filter: string
    ){}

    abstract getSepia(): void  // Must necessary be implemented in child class
    getReelTime(): void {
        console.log("Reel Time");
    }
}

// user = new TakePhoto("test", "test") // Can't create object(instance) of abstract class
// But can create object of child classes who inherit abstract class
class Instagram extends TakePhoto {
    getSepia(): void {
        console.log("Sepia");
    }
}

let user = new Instagram("test", "test") // Allowed
