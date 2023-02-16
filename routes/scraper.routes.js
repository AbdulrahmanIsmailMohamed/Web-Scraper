const scraper = require("../scraper");

const router = require("express").Router();

router.post("/scraper", (req, res) => {
    scraper(req.body.input);
    res.json("Done!").status(200)
});

module.exports = router;