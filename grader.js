#!/usr/bin/node
/*
    Grade student marks as input by a user 
    
    A user inputs marks as an integer, a value btn 0-100
    the input should be graded as follows:
    A ==>79 B ==>60 C ==>49 D ==>40 E ==>39
*/

// This is a bit of a hack if you are an old school engineer
// if (process.argv.length <= 2) {
//     process.stderr.write("Missing Value:Pease input students mark\n");
//     process.stderr.write("Usage: ./grader.js <marks>\n");
//     process.stderr.write("Example: ./grader.js 80\n");
//     process.exit(1)
// }

const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
input.question("Enter students marks: ", function (mark){ 
    let marks = parseInt(mark, 10);
    if (isNaN(marks)){
        process.stdout.write("Please Enter a valid number\n");
        process.exit(1)
    }else{
        if (marks > 79) {
            process.stdout.write("A\n");    
        } else if (marks > 60) {
            process.stdout.write("B\n");    
        } else if(marks > 49) {
            process.stdout.write("C\n");
        } else if(marks > 40) {
            process.stdout.write("D\n");
        }else{
            process.stdout.write("E\n");
        }
    } 
    input.close();
});



// marks = parseInt(process.argv[2], 10)



// if (isNaN(marks)){
//     process.stdout.write("Please Enter a valid number\n");
//     process.exit(1)
// }else{
//     if (marks > 79) {
//         process.stdout.write("A\n");    
//     } else if (marks > 60) {
//         process.stdout.write("B\n");    
//     } else if(marks > 49) {
//         process.stdout.write("C\n");
//     } else if(marks > 40) {
//         process.stdout.write("D\n");
//     }else{
//         process.stdout.write("E\n");
//     }
// }







