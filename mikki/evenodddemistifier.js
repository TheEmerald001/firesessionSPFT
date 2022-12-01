#!/usr/bin/node

const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

input.question("Enter Number To Check: ", function (checknumber){ 
    let checknumbers = parseInt(checknumber, 10);
    if (isNaN(checknumbers)){
        process.stdout.write("Please Enter a valid numeral!\n");
        process.exit(1)
    }else{
        remainder = checknumbers % 2;
        if(remainder == 0){
            process.stdout.write(`${checknumbers} is an EVEN number\n`);
        }else{
            process.stdout.write(`${checknumbers} is an ODD number\n`);
        }
    } 
    input.close();
});