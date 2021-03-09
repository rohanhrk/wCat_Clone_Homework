let firstFile = require("./commands/first.js");
let secondFile = require("./commands/second");

let input = process.argv.slice(2);
let commands = input[0];

switch(commands) {
    case "1":
        firstFile.fn(input[1]);
        break;
    case "2":
        for(let i=1; i<=2; i++){
            secondFile.fn(input[i]);
        }
        
    case 3:

    case 4:

    case 5:

    case 6:
        sixthFile.fn(input[1],input[2],input[3]);
    case 7:

    case 8:


}