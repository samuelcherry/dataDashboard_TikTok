const express = require('express');
const multer = require('multer');
const csvParser = require('csv-parser');
const fs = require('fs');
const cors = require('cors');
const demoSplit = require('./demoSplit');

const app = express();
const port = 3000;
const upload = multer({ dest: "uploads/"});

app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.post("/upload", upload.single("file"), (req,res) => {
    const results = [];
    fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on("data", (row) => results.push(row))
    .on("end", async() => {
        try{
            const processed = await demoSplit(results);
            res.json({
                success: true,
                data: {processed}
            });
            fs.unlinkSync(req.file.path);
        }catch (err) {
            res.status(500).json({error: err.message});
        }
    });
});

app.get("/api/message", (req,res) => {
    console.log("GET /api/message sending:", processed);
    res.json(processed);
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
