
Array.prototype.myReduce = function (fn, initialValue) {
    let accumulator; 
    let startIndex; 

    // If no initial value is provided, use the first array element
    if (accumulator === undefined) {
        accumulator = this[0];
        startIndex = 1; // Start from the second element
    }
    else {
        accumulator = initialValue;
        startIndex = 0;// Starting index for the loop
    };

    // Iterate through the array
    for (let i = startIndex; i < this.length; i++) {
        accumulator = fn(accumulator, this[i]); // Update the accumulator
    }

    return accumulator; // Return the final result
};

// Example usage
const arr = [175,50,25];
const sum = arr.myReduce((acc, curr) => acc - curr);

console.log(sum); // Output: 10
