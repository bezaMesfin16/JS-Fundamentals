const args = process.argv.slice(2); // Get the command line arguments
const size = parseInt(args[0], 10); // Convert the first argument to an integer

if (isNaN(size)) {
    console.log("Missing size");
} else {
    for (let i = 0; i < size; i++) {
        console.log('X'.repeat(size));
    }
}