// const addForm = document.querySelector('form')
// const animalInput = document.querySelector('input')

// function submitHandler(event) {
//     event.preventDefault()
//     axios.post('http://localhost:4000/api/animal', {animal: animalInput.value})
//         .then(res => {
//             animalInput.value = ''

//             res.data.forEach((animalName) => {
//                 console.log(animalName) 
//             });
//         })
//         .catch(err => {
//             animalInput.value = ''

//             const notif = document.createElement('aside')
//             notif.innerHTML = `<p>${err.response.data}</p>
//             <button class="close">close</button>`
//             document.body.appendChild(notif)

//             document.querySelectorAll('.close').forEach(btn => {
//                 btn.addEventListener('click', (e) => {
//                     e.target.parentNode.remove()
//                 })
//             })
//         })
// }

// addForm.addEventListener('submit', submitHandler)