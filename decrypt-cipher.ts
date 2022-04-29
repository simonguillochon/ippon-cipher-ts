import table  from "./vigenere-table";

const args = require('minimist')(process.argv.slice(2));
const key: string = args.key;
const message: string = args.message;

console.log(key);
console.log(message);
console.log('');
