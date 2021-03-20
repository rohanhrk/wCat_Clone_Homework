// let request = require("request");
// let cheerio = require("cheerio");
// let infoArr = [];
// function extractMatchInfo(html) {
//     let chSel = cheerio.load(html);
//     //date ,venue ,result and opponent name for that match
//     let description = chSel(".match-info.match-info-MATCH .description");
//     // console.log(description.text());//Final (N), Dubai, Nov 10 2020, Indian Premier League
//     description = description.text().split(",");
//     // console.log(description); //[ 'Final (N)', ' Dubai', ' Nov 10 2020', ' Indian Premier League' ]
//     let matDate = description[2].trim();
//     // console.log(matDate);//Nov 10 2020
//     let venue = description[1].trim();
//     // console.log(venue);
//     let result = chSel(".match-info.match-info-MATCH .status-text").text();
//     let opponent = chSel(".match-info.match-info-MATCH .team.team-gray .name-detail").text();
//     let infoObj = {
//         date: matDate,
//         venue: venue,
//         result: result,
//         opponentName: opponent
//     }
//     infoArr.push(infoObj);
// }
// console.log(infoArr);

// module.exports = {
//     extractInfo: extractMatchInfo
// }