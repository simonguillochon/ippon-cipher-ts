import table from './vigenere-table';

const args = require('minimist')(process.argv.slice(2));
const key: string = args.key;
const message: string = args.message;

let keyIndex = 0;
let result = '';

const getLetterAtIndex = ((index: number) => {
  return ('abcdefghijklmnopqrstuvwxyz'.charAt(index));
})

message.split('').forEach((letter, index) => {

  result += getLetterAtIndex(table.get(key.charAt(keyIndex).toUpperCase()).indexOf(letter));

  (keyIndex === key.length - 1) ? keyIndex = 0 : keyIndex++;
});

console.log(`key is ${key} and message is "${message}" 🤔`);
console.log(`result is then "${result}" 😁\n`);
