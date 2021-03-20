let request = require("request");
let cheerio = require("cheerio");

// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    }
    else {
        let chSel = cheerio.load(html);

        let teamTable = chSel(".Collapsible");
        console.log(teamTable.length);
        // let teamTitle = chSel(".Collapsible h5");//DELHI CAPITALS INNINGS (20 OVERS MAXIMUM)
        for (let i = 0; i < teamTable.length; i++) {

            let teamTitle = chSel(teamTable[i]).find(".col").text();//DELHI CAPITALS INNINGS (20 OVERS MAXIMUM)
            let teamFirstName = teamTitle.split("INNINGS")[0].trim();//DELHI CAPITALS
            console.log(teamFirstName);

            let tableArr = [];
            let battable = chSel(teamTable).find(".table.batsman");//batsman table
            // console.log("battable->" + battable.length);
            let eachbatrow = chSel(battable[i]).find("tr");
            for (let j = 0; j < eachbatrow.length; j++) {
                let eachbatcol = chSel(eachbatrow[j]).find("td");
                // console.log(eachbatcol.length);
                if (eachbatcol.length == 8) {
                    let playerName = chSel(eachbatcol[0]).text();
                    let runs = chSel(eachbatcol[2]).text();
                    let ball = chSel(eachbatcol[3]).text();
                    let fours = chSel(eachbatcol[5]).text();
                    let sixes = chSel(eachbatcol[6]).text();
                    let sr = chSel(eachbatcol[7]).text();
                    // console.log(playerName + " " + runs);
                    // console.log(playerName + " " + runs + " " + ball + " " + fours + " " + sixes + " " + sr);
                    let tableObj = {
                        playerName: playerName,
                        runs: runs,
                        ball: ball,
                        fours: fours,
                        sixes: sixes,
                        sr: sr
                    }
                    tableArr.push(tableObj);
                }
            }
            console.table(tableArr);
        }
    }
}

