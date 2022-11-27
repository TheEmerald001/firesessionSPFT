#!/usr/bin/node

/*
    Detect overspeeding to save lives!
    
    Speed is input an integer
    the input is enumearated as follows:
    Speed < 70; print OK!
    Speed < 70, deduct 1 point for every 5 km and print total number of demerit point
    suspend licence on more than 12 point
*/

const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

input.question("Speed of the car: ", function (speed){ 
    let speed_of_car = parseInt(speed, 10);
    if (isNaN(speed)){
        process.stdout.write("Speed must be a numerical value\n");
        process.stdout.write("use this a follows: On prompt input as numerical value e.g 50\n");
        process.exit(1)
    }else{
       if (speed_of_car < 70){
        process.stdout.write("Ok!\n");
       } else{
        const demerit_points = ((speed_of_car - 70) / 5);
        Math.ceil(demerit_points);
        process.stdout.write(`Points: ${demerit_points}\n`);
            if (demerit_points >= 12) {
                process.stdout.write("License suspended.\n");                
            } else {
                process.exit(0);                
            }
       }
    }
    input.close();
});