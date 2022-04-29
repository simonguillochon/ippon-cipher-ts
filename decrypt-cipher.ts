const args = require('minimist')(process.argv.slice(2));
const key: string = args.key;
const message: string = args.message;

const table = {
 "A": 'abcdefghijklmnopqrstuvwxyz',
 "B": 'bcdefghijklmnopqrstuvwxyza',
 "C": 'cdefghijklmnopqrstuvwxyzab',
 "D": 'defghijklmnopqrstuvwxyzabc',
 "E": 'efghijklmnopqrstuvwxyzabcd',
 "F": 'fghijklmnopqrstuvwxyzabcde',
 "G": 'ghijklmnopqrstuvwxyzabcdef',
 "H": 'hijklmnopqrstuvwxyzabcdefg',
 "I": 'ijklmnopqrstuvwxyzabcdefgh',
 "J": 'jklmnopqrstuvwxyzabcdefghi',
 "K": 'klmnopqrstuvwxyzabcdefghij',
 "L": 'lmnopqrstuvwxyzabcdefghijk',
 "M": 'mnopqrstuvwxyzabcdefghijkl',
 "N": 'nopqrstuvwxyzabcdefghijklm',
 "O": 'opqrstuvwxyzabcdefghijklmn',
 "P": 'pqrstuvwxyzabcdefghijklmno',
 "Q": 'qrstuvwxyzabcdefghijklmnop',
 "R": 'rstuvwxyzabcdefghijklmnopq',
 "S": 'stuvwxyzabcdefghijklmnopqr',
 "T": 'tuvwxyzabcdefghijklmnopqrs',
 "U": 'uvwxyzabcdefghijklmnopqrst',
 "V": 'vwxyzabcdefghijklmnopqrstu',
 "W": 'wxyzabcdefghijklmnopqrstuv',
 "X": 'xyzabcdefghijklmnopqrstuvw',
 "Y": 'yzabcdefghijklmnopqrstuvwx',
 "Z": 'zabcdefghijklmnopqrstuvwxy',
}

console.log(key);
console.log(message);
console.log('');
