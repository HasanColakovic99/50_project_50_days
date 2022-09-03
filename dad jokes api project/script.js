const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke()

jokeBtn.addEventListener('click', generateJoke);

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    // RAD S API-om
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json();

    jokeEl.innerHTML = data.joke;
}

// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }
//     // RAD S API-om
//     fetch('https://icanhazdadjoke.com', config).then((response) =>   response.json()).then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }