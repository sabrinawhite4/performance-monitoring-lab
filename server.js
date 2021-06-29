const express = require('express');
const path = require('path');
const gradient = require('gradient-string');
const app = express();

app.use(express.json());

app.get('/', (req,res) => {

    res.sendFile(path.join(__dirname, '/public/index.html'))
})

const port = process.env.PORT || 4000;
app.listen(port, () => {console.log(gradient.instagram(`Server rocking on ${port}`))});