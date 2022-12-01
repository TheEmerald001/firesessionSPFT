#!/usr/bin/node

const readline = require('readline');
const input = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  }
);

input.question('Enter Your E-mail Address: ', function (email) {
  splitEmail = email.split('');

  if (splitEmail.includes('@')) {
    if (splitEmail.includes('.')) {
      process.stdout.write('The input Value is a Valid Email Address\n');
    } else {
      process.stdout.write("The input Value is not Valid Email Address, E-mail MUST have a '.' character\n");
    }
  } else {
    process.stdout.write("The input is not a Valid Email Address, E-mail MUST have both a '.' and an '@' character\n");
  }
  input.close();
});
