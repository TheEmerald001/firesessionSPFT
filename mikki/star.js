#!/usr/bin/node

const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

input.question("Enter a Number star Gazer!: ", function (stars){ 
    let starNumber = parseInt(stars, 10);
    if (isNaN(starNumber)){
        process.stdout.write("Please Enter a valid numeral!\n");
        process.exit(1)
    }else{
        for (let i = 1; i <= starNumber; i++) {
            console.log('*'.repeat(i));           
        }
    } 
    input.close();
});
