let request = require("request");
let cheerio = require("cheerio");
// let permathObj = require("./3_permath");

function matchresult(src) {
    request(src, cb);
}

function cb(err, response, html) {
    if (err) {
        console.log(err);
    }
    else {
        matchresultext(html);
    }
}

function matchresultext(html) {
    let chSel = cheerio.load(html);
    let matchblock = chSel(".col-md-8.col-16 .match-score-block .match-info-link-FIXTURES");
    console.log(matchblock.length);
    for (let i = 0; i < matchblock.length; i++) {
        let matchlink = chSel(matchblock[i]).attr("href");//"/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"
        let fullurl = "https://www.espncricinfo.com" + matchlink;
        //https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard
        console.log(fullurl);
        // permathObj.fn(fullurl);
    }
}

matchresult("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results");