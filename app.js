const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

/*app.use(function (req, res) {
    return res.sendStatus(200);
});
*/
app.get('/helloworld',function (req, res) {
    console.log("123")
    return res.send("Hello world")
});

app.listen(PORT, function () {
    console.log('Sample Hosting app listening on port 8000 v3');
});
