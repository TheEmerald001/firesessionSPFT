#!/usr/bin/node

const readline = require('readline');
const input = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  }
);

input.question('Please Enter your Phone Number: ', function (phonenumber) {
  if (phonenumber.length === 13) {
    splitNumberArray = phonenumber.split('');
    const checker = splitNumberArray.slice(0, 4).join('');
    if (checker === '+254') {
      process.stdout.write(`${phonenumber}\n`);
    } else {
      process.stdout.write('Please enter a valid Kenyan phone number\n');
    }
  } else if (phonenumber.length === 12) {
    splitNumberArray = phonenumber.split('');
    const checker = splitNumberArray.slice(0, 3).join('');
    if (checker === '254') {
      splitNumberArray.unshift('+');
      const phonenumber = splitNumberArray.join('');
      process.stdout.write(`${phonenumber}\n`);
    } else {
      process.stdout.write('Please enter a valid Kenyan mobile phone number\n');
    }
  } else if (phonenumber.length === 10) {
    splitNumberArray = phonenumber.split('');
    const checker = splitNumberArray.slice(0, 2).join('');
    if (checker === '01' || checker === '07') {
      splitNumberArray.shift();
      splitNumberArray.unshift('+', '2', '5', '4');
      const phonenumber = splitNumberArray.join('');
      process.stdout.write(`${phonenumber}\n`);
    } else {
      process.stdout.write('Please enter a valid Kenya mobile phone number\n');
    }
  } else if (phonenumber.length === 9) {
    splitNumberArray = phonenumber.split('');
    const checker = splitNumberArray.slice(0, 1).join('');
    if (checker === '1' || checker === '7') {
      splitNumberArray.unshift('+', '2', '5', '4');
      const phonenumber = splitNumberArray.join('');
      process.stdout.write(`${phonenumber}\n`);
    } else {
      process.stdout.write('Please enter a valid Kenya mobile phone number\n');
    }
  } else {
    process.stderr.write('Please enter a valid Kenyan mobile phone number.\n');
    process.stderr.write('Hint: Kenyan Phone numbers may be 13 digits long by starting with +254, 12 digits long by starting with 254, 10 digits long by starting with 07 or 01, or 9 digits long by starting with 7.. or 1..\n');
    process.exit(1);
  }

  input.close();
});
