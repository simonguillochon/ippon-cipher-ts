interface Arguments {
  key: string;
  message: string;
}

const args: Arguments = require('minimist')(process.argv.slice(2));
/*
 *
 * You can access to :
 * => the key with args.key and
 * => the message with args.message
 * 
 */

console.log("I am the decrypted message !\n");
