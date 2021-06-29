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
// app.use(express.static(path.join(__dirname, 'public')));

const animal = []

app.get('/', (req,res) => {
    rollbar.log("Hello Sabrina!");

    rollbar.warning('Unavailable')
    rollbar.critical('App has crashed!')
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/api/animal', (req, res) => {
    let {animal} = req.body
    animal = animal.trim();

    const index = animals.findIndex((animalName) => {
        animalName === animal
    });

    try {
        if (index === -1 && animal !== '') {
            animals.push(animal)
            rollbar.log('Animal added successfully', {author: 'Sabrina', type: 'manual'});
            res.status(200).send(animals)
        } else if (animal === '') {
            rollbar.error('no animal provided');
            res.status(400).send('must provide an animal')
        } else {
            rollbar.error('Animal already exists')
            res.status(400).send('That animal already exists')
        }
    } catch (err) {
        rollbar.error(err)
    }
});

const port = process.env.PORT || 4000;

app.use(rollbar.errorHandler());
app.listen(port, () => {console.log(gradient.instagram(`Server rocking on ${port}`))});