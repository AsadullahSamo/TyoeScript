function detectType(val: number | string) {
    if (typeof val === "number") {
        return val * 2;
    }
    else if (typeof val === "string") {
        return val.toUpperCase();
    }
}

function provideId(id: string | null) {
    if (!id) {
        console.log("Please Provide ID");
        return;
    }
    id.toLowerCase();
}


// instancof narrowing and type predicates

// Anything created with new keyword is an instance of a class

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}

type Fish = {
    swim: () => void;
};

type Bird = { 
    fly: () => void;
}   

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "Fish food"
    }
    else {
        pet
        return "Bird food"
    }
}



// Discriminated Unions
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side ** 2;
}

function getShape(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.width * shape.height;
        default: 
        const defaultForShape: never = shape;
        return defaultForShape;
    }
}