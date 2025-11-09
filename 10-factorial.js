const args = process.argv.slice(2); // Get the command line arguments

function factorial(n) {
    if (n < 0) return 1; // Factorial of negative numbers is not defined
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}

const num = parseInt(args[0], 10); // Convert the first argument to an integer
console.log(factorial(isNaN(num) ? 1 : num)); // Print the factorial, treating NaN as 1