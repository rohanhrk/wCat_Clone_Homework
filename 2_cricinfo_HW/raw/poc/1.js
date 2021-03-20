let request = require("request");
let cheerio = require("cheerio");
// let matchresultObj = require("./2_matchresult");

// https://www.espncricinfo.com/series/ipl-2020-21-1210595
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
request(url , cb) ;
function cb(err , response , html) {
    if(err) {
        console.log(err);
    }
    let chSel = cheerio.load(html);
    let allResult = chSel(".widget-items.cta-link a");
    // console.log(allResult.length);
    let resultLink = chSel(allResult[0]).attr("href");
    // console.log(resultLink);
    let fullLink = "https://www.espncricinfo.com" + resultLink;
    console.log(fullLink);//https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results
    // matchresultObj.fn(fullLink);
}