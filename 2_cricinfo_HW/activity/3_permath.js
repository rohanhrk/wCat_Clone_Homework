let request = require("request");
let cheerio = require("cheerio");
let batstatObj = require("./4_batsmanStat");
// let matchInfoObj = require("./5_extractMathInfo");
function permath(src) {
    request(src, cb);
}

function cb(err, Response, html) {
    if (err) {
        console.log(err);
    }
    else {
        extractmathTable(html);
    }
}

function extractmathTable(html) {
    let chSel = cheerio.load(html);

    let teamTable = chSel(".Collapsible");
    // console.log(teamTable.length);
    // let teamTitle = chSel(".Collapsible h5");//DELHI CAPITALS INNINGS (20 OVERS MAXIMUM)
    for (let i = 0; i < teamTable.length; i++) {

        let teamTitle = chSel(teamTable[i]).find(".col").text();//DELHI CAPITALS INNINGS (20 OVERS MAXIMUM)
        let teamFirstName = teamTitle.split("INNINGS")[0].trim();//DELHI CAPITALS
        // console.log(teamFirstName);


        let battable = chSel(teamTable).find(".table.batsman");//batsman table
        // console.log("battable->" + battable.length);
        batstatObj.batsmanState(battable, chSel, i ,teamFirstName);
    }
}

module.exports = {
    fn: permath
}