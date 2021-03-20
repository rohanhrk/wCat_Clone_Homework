let fs = require("fs");
// write
let arr = [];
let content = fs.readFileSync("abc.json","utf8");

// console.log(content.length);
if (content.length == 0) {
    arr.push({
        name: "Jasbir",
        age: 24
    })
    let contentinfile = JSON.stringify(arr);
    fs.writeFileSync("abc.json", contentinfile);
}

// update 
else if (content.length > 0) {
    let contArr = JSON.parse(content);
    contArr.push({
        name: "sid",
        age: 24
    })
    let contentinfile = JSON.stringify(contArr);
    fs.writeFileSync("abc.json", contentinfile);
}

