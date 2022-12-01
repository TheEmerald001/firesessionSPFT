#!/usr/bin/node

const readline = require('readline');
const input = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  }
);

input.question("Enter Three numbers Separated with commas: ", function (givenNumbers){ 
    numbersArray = givenNumbers.split(",");
    num1 = parseInt(numbersArray[0], 10);
    num2 = parseInt(numbersArray[1], 10);
    num3 = parseInt(numbersArray[2], 10);

    if ((num1 > num2) && (num1 > num3)){
        if ((num1 % 4) === 0){
            console.log(`I, ${num1}, is the largest and I am a Quadrant factor!`)
        }else
        console.log(num1)
    }else if ((num2 > num1) && (num2 > num3)){
        if ((num2 % 4) === 0){
            console.log(`I, ${num2}, is the largest and I am a Quadrant factor!`)
        }else
        console.log(num2)
    } else{
        if ((num3 % 4) === 0){
            console.log(`I, ${num3}, is the largest and I am a Quadrant factor!`)
        }else
        console.log(num3)
    }
    input.close();
});