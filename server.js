const fs = require("fs");
const path = require("path");
const express = require("express");
const db = require("./db/db.json");

const PORT = process.env.port || 3002;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ==================== GET ROUTES =====================
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.get("/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});

// ================== GET REQUEST  =======================
currentID = db.length;
app.get("/api/notes", function (req,res){
    return res.json(db)
})

app.post ("/api/notes", function (req,res) {
    const newNote = req.body;
    newNote["id"] = currentID +1;
    db.push(newNote);

    const createNote = JSON.stringify(db);
    fs.writeFile(path.join(__dirname, "/db/db.json"), createNote);
        res.json(newNote);
        
})
 
// ================= LISTENING ON PORT ========================
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!📓`);
});