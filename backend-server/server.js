const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
app.post('/api/login', (req, res) => {

    console.log(req.body);
    res.redirect('http://localhost:4200/dashboard')
});
app.get('', (req, res) => {

    console.log(req);
    res.json()
    // res.redirect('http://localhost:4200/dashboard/')
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})