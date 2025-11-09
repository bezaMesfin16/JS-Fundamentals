const args = process.argv.slice(2); // Get the command line arguments

function add(a, b) {
    return a + b; // Return the sum of a and b
}

const num1 = parseInt(args[0], 10); // Convert the first argument to an integer
const num2 = parseInt(args[1], 10); // Convert the second argument to an integer

console.log(add(num1, num2)); // Print the result of the addition