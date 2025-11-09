const args = process.argv.slice(2); // Get the command line arguments

if (args[0] === undefined) {
    console.log("No argument");
} else {
    console.log(args[0]);
}