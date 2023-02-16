const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs")

const writeStream = fs.createWriteStream("info.svg")
function scraper(link) {
    request(link, (err, response, body) => {
        if (!err && response.statusCode == 200) {
            const $ = cheerio.load(body)
            $(".container-xl").each((i, el) => {
                const name = $(el)
                    .find(".p-name")
                    .text()
                    .replace(/\s\s+/g, "");

                const nameRepo = $(el)
                    .find(".repo")
                    .text()
                    .replace(/\s\s+/g, "")

                writeStream.write(`${name} ${nameRepo} \n`)
            });
        };
    });
}

module.exports = scraper