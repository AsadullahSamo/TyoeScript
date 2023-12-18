let id: number | string;      // id can have either string or number value
id = 5;
id = "5"
//id = false

function getDbId(id: number | string) {
    // id.toLowerCase();        // As we first defined number so String methods are not available. So we need to check the type first
    if (typeof id === "string") {
        return id.toUpperCase();
        // return id.toFixed(2); // Typescript based on condition detected the type string
    } else {
        return id.toFixed(2);
    }
    
}

getDbId(5);
getDbId("5");

// For Arrays
let arr: (number | string)[] = [1, 2, 3, "4", "5", "6"];

// A case where we can only assign certain values to a variable
let seatAllotment: "aisle" | "window" | "middle";
seatAllotment = "aisle";
// seatAllotment = "crew";     // not allowed (Only aisle, window or middle are allowed)