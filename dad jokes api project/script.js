const joke = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');

btn.addEventListener('click', () => {
    generateJoke();
})

generateJoke();

// function generateJoke() {
//     fetch('https://icanhazdadjoke.com', {
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         joke.innerHTML = data.joke
//     });
// };

async function generateJoke() {
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await res.json();
    joke.innerHTML = data.joke;
};
