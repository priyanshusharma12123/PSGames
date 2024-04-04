const express = require("express");
const ejs = require("ejs");

const app = express();

//Below line needed for running Ejs Files 
app.set('view-engine', 'ejs');

//For running static files
app.use(express.static("public"));
app.use(express.static(__dirname + "/js/game.js"));
app.use(express.static(__dirname + "/js/dice-game.js"));
app.use(express.static(__dirname + "/js/drum.js"));


const typSty1 = ["css/main-styles.css", "css/simon-styles.css", "css/dice-styles.css", "css/drumkit-styles.css"];
const mainTitle = ["PS Games - Out Now 🎬", "Press A Key to Start", ""];
const scrText = ["#","js/game.js","js/dice-game.js","js/drum.js"];



app.get("/", (req,res) => {
    res.render("main.ejs", {typeStyle: typSty1[0], newTitle: mainTitle[0], scrptName: scrText[0],});
});

app.post("/simon", (req,res) => {
    res.render("simon.ejs", {typeStyle: typSty1[1], newTitle: mainTitle[1], scrptName: scrText[1],});
    
});

app.post("/dice", (req,res) => {
    res.render("dice.ejs", {typeStyle: typSty1[2], newTitle: mainTitle[2], scrptName: scrText[2]});
});

app.post("/drum", (req,res) => {
    res.render("drumkit.ejs", {typeStyle: typSty1[3], newTitle: mainTitle[2], scrptName: scrText[3]});
});



app.listen(3000, () => {
    console.log("Server started at port 3000...");
});