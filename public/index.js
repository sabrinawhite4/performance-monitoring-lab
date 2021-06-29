const { default: axios } = require("axios");

const addBtn = document.querySelector('#add-button');

addBtn.addEventListener('click', addAnimal);

addAnimal () => {
    axios.post('https://localhost:4000/api/animals')
    .then(console.log('Animal Added!'))
    .catch(err => console.log(err));
}