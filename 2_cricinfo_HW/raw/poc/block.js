let request = require("request");
let cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";
request(url , cb);
function cb(err, response, html) {
    if(err) {
        console.log(err);
    }
    let chSel = cheerio.load(html);
    let matchblock = chSel(".col-md-8.col-16 .match-score-block .match-info-link-FIXTURES");
    console.log(matchblock.length);
    for (let i = 0; i < matchblock.length; i++) {
        let matchlink = chSel(matchblock[i]).attr("href");
        let fullurl = "https://www.espncricinfo.com" + matchlink;
        console.log(fullurl);
        // permathObj.fn(fullurl);
    }
}
