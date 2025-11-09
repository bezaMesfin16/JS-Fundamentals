const args = process.argv.slice(2); // Get the command line arguments
const x = parseInt(args[0], 10); // Convert the first argument to an integer

if (isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    let count = 0;
    while (count < x) {
        console.log("C is fun");
        count++;
    }
}