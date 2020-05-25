const express = require("express");
const fs = require('fs');
const path = require('path');
let app = express();

// Test that it is working
app.get('/', (req, res) => {
    res.send("Hello from JepAPI");
});

// Actual Logic
// TODO: Nothing here uses authentication. Has almost no verification
app.get('/puzzles/:id', (req, res) => {
    let jeppath = path.join(process.cwd(), "./Jeopardy/"+req.params.id);
    console.log("Checking jeopath " + jeppath);
    if (fs.existsSync(jeppath)) {
        res.sendFile(jeppath);
    } else {
        res.json({success:false,errmsg:"No File Found"});
    }
});

app.put('/puzzles/:id', (req, res) => {
    let jeppath = path.join(process.cwd(), "./Jeopardy/"+req.params.id);
    if (fs.existsSync(jeppath)) {
        fs.unlinkSync(jeppath);
    }
    fs.writeFileSync(jeppath, req.body);
});

app.delete('/puzzles/:id', (req, res) => {
    let jeppath = path.join(process.cwd(), "./Jeopardy/"+req.param["id"]);
    if (fs.existsSync(jeppath)) {
        fs.unlinkSync(jeppath);
        res.json({success:true,errmsg:""});
    } else {
        res.json({success:false,errmsg:"File doesn't exist"});
    }
});

module.exports = app;