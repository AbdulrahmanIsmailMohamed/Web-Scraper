const requset = require("request");
const cheerio = require("cheerio");

requset("https://github.com/AbdulrahmanIsmailMohamed", (err, response, html) => {
    if (!err && response.statusCode == 200) {
        const $ = cheerio.load(html);
        const siteHeading = $(".clearfix");

        // console.log(siteHeading.html());
        // console.log(siteHeading.text());

        // const output = siteHeading.find("h1").html();
        // const output = siteHeading.find("a").html();
        const output = siteHeading.find("h1").text();
        console.log(output);
    }
})