// let infoArr;
let fs = require("fs");
let path = require("path");


function dirCreater(src) {
    if (fs.existsSync(src) == false) {
        fs.mkdirSync(src);
    }
}

function createfile(filePath) {
    if (fs.existsSync(filePath) == false) {
        fs.openSync(filePath, "w");
    }
}

function batstatatics(battable, chSel, i, teamFirstName) {
    // infoArr = [];
    // let tableArr = [];
    let arr = [];
    //create a folder of ipl_2020
    let folderToMake = path.join("C:\\Users\\abc\\Desktop", "ipl_2020");
    if (fs.existsSync(folderToMake) == false) {
        //if destination folder is not present in src folder
        //create destination folder
        fs.mkdirSync(folderToMake);
    }
    let pathofFolder = path.join(folderToMake, teamFirstName);
    dirCreater(pathofFolder);

    let eachbatrow = chSel(battable[i]).find("tr");
    for (let j = 0; j < eachbatrow.length; j++) {
        let eachbatcol = chSel(eachbatrow[j]).find("td");
        // console.log(eachbatcol.length);
        if (eachbatcol.length == 8) {
            let playerName = chSel(eachbatcol[0]).text();
            let name = playerName.split(" ");
            filename = name[0].trim() + name[1].trim();
            // console.log(filename);
            let filePath = path.join(pathofFolder, filename + ".json");
            createfile(filePath);

            let runs = chSel(eachbatcol[2]).text();
            let ball = chSel(eachbatcol[3]).text();
            let fours = chSel(eachbatcol[5]).text();
            let sixes = chSel(eachbatcol[6]).text();
            let sr = chSel(eachbatcol[7]).text();
            // console.log(playerName + " " + runs);
            // console.log(playerName + " " + runs + " " + ball + " " + fours + " " + sixes + " " + sr);
            // let tableObj = {
            //     playerName: playerName,
            //     runs: runs,
            //     ball: ball,
            //     fours: fours,
            //     sixes: sixes,
            //     sr: sr
            // }
            // tableArr.push(tableObj);



            // date, venue, result and opponent name for that match
            let description = chSel(".match-info.match-info-MATCH .description");
            // console.log(description.text());//Final (N), Dubai, Nov 10 2020, Indian Premier League
            description = description.text().split(",");
            // console.log(description); //[ 'Final (N)', ' Dubai', ' Nov 10 2020', ' Indian Premier League' ]
            let match = description[0].trim();
            //console.log(match);//Final (N)
            let matDate = description[2].trim();
            // console.log(matDate);//Nov 10 2020
            let venue = description[1].trim();
            // console.log(venue);
            let result = chSel(".match-info.match-info-MATCH .status-text").text();
            let opponentName = chSel(".match-info.match-info-MATCH .teams .name-detail");
            // let opponent = chSel(".match-info.match-info-MATCH .team.team-gray .name-detail").text();
            let opponent
            //finding opponent name
            if (i == 0) {
                opponent = chSel(opponentName[1]).text();
            } else if (i == 1) {
                opponent = chSel(opponentName[0]).text();
            }

            // let infoObj = {
            //     date: matDate,
            //     venue: venue,
            //     result: result,
            //     opponentName: opponent
            // }
            // infoArr.push(infoObj);

            let matchcontent = {
                matchNo: match,
                runs: runs,
                ball: ball,
                fours: fours,
                sixes: sixes,
                sr: sr,
                date: matDate,
                venue: venue,
                result: result,
                opponentName: opponent
            }

            //put content in filepath
            // write
            let arr = [];
            let content = fs.readFileSync(filePath, "utf8");

            // console.log(content.length);
            if (content.length == 0) {
                arr.push(matchcontent);

                let contentinfile = JSON.stringify(arr);
                fs.writeFileSync(filePath, contentinfile);
            }

            // update 
            else if (content.length > 0) {
                let contArr = JSON.parse(content);
                contArr.push(matchcontent)
                let contentinfile = JSON.stringify(contArr);
                fs.writeFileSync(filePath, contentinfile);
            }



        }
        // arr = [];
        // arr.push({
        //     runs: runs,
        //     ball: ball,
        //     fours: fours,
        //     sixes: sixes,
        //     sr: sr,
        //     date: matDate,
        //     venue: venue,
        //     result: result,
        //     opponentName: opponent
        // })
        // let contentinfile = JSON.stringify(arr);
        // fs.writeFileSync(filePath, contentinfile);


        // else if(arr.length>0){
        //     let content = fs.readFileSync(filePath);
        //     arr = JSON.parse(content);//buffer ko parse karne ke liye
        //     arr.push({
        //         runs: runs,
        //         ball: ball,
        //         fours: fours,
        //         sixes: sixes,
        //         sr: sr,
        //         date: matDate,
        //         venue: venue,
        //         result: result,
        //         opponentName: opponent
        //     })
        //     contentinfile = JSON.stringify(arr);
        //     fs.writeFileSync(filePath, contentinfile);
        // }

    }
}
// console.table(tableArr);
// console.table(infoArr);



module.exports = {
    batsmanState: batstatatics
}