const express = require('express');
const path = require('path');
const gradient = require('gradient-string');
const app = express();
const RollBar = require('rollbar');
const rollbar = new RollBar({
    accessToken: 'ebd583141fbc4450a07084d54c962253',
    captureUncaught: true,
    captureUnhandledRejections: true
});

app.use(express.json());

function students() {

}

app.get('/', (req,res) => {
    rollbar.log("Hello Sabrina!");

    res.sendFile(path.join(__dirname, '/public/index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {console.log(gradient.instagram(`Server rocking on ${port}`))});