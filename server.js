const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const USERNAME = "quoge gaming"; 
const PASSWORD = "Onions12";

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/login", (req, res) => {
    console.log(req.body); // 👈 DEBUG LINE

    const { username, password } = req.body;

    if (username === USERNAME && password === PASSWORD) {
        res.sendFile(path.join(__dirname, "public", "vidView.html"));
    } else {
        res.send(`<h1>Invalid login</h1>
                  <p>You sent: ${username} / ${password}</p>`);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});