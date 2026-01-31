// unit 01

// readline is a MODULE in NodeJs for user interactions
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter your name: ", (name) => {
//   console.log(`My name is ${name}`);
//   rl.close();
// });

// rl.on("close", () => {
//   console.log("Interface closed !");
//   process.exit(0);
// });

// unit 02

// Write & Read a file with fs sync
const fs = require('fs')

let inText = fs.readFileSync('./files/input.txt', 'utf-8')
console.log(inText)

let content = 'This is the output text'
fs.writeFileSync('./files/output.txt', content)