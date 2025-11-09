const args = process.argv.slice(2); // Get the command line arguments

console.log(`${args[0] || 'undefined'} is ${args[1] || 'undefined'}`);