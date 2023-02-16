const express = require("express");
const scraperRoute = require("./routes/scraper.routes")

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"));

app.use("/", scraperRoute)

const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`The Server Running In Port ${port}`));