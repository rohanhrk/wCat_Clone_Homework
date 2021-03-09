let fs = require("fs");
let path = require("path");

function DisplayContentfn(src) {
    let isFile = isFileOrNot(src);
    if (isFile == true) {
        //    if given src is file 
        //    then print all the content
        fs.readFile(src, cb);
        function cb(err, content) {
            console.log("content =>" + content);
        }

    }
    else {
        // print src
        // console.log(src);
        // content read from os
        let fDirnames = readContent(src);
        // recursion 
        // console.log(fDirnames);
        for (let i = 0; i < fDirnames.length; i++) {
            let child = fDirnames[i];
            //    good practice??
            // let dirNamepath = src + "\\" + child;
            let dirNamepath = path.join(src, child);
            DisplayContentfn(dirNamepath);
        }
    }
}
module.exports ={
    fn: DisplayContentfn
};

//check given path is file or not
function isFileOrNot(src) {
    return fs.lstatSync(src).isFile();
}

//read content 
function readContent(src) {
    return fs.readdirSync(src);
}