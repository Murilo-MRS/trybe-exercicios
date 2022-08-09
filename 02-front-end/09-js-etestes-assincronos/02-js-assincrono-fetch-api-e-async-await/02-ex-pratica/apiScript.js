// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   fetch(API_URL, { headers: { Accept: 'application/json' } })
//     .then(response => response.json())
//     .then(data => document.getElementById('jokeContainer').innerText = data.joke);
// }

// window.onload = () => fetchJoke();

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke);

    try {
        const response = await fetch(API_URL, { headers: { Accept: 'application/json' } });
        const data = await response.json();
        document.getElementById('jokeContainer').innerText = data.joke;
    } catch (error) {
        document.getElementById('jokeContainer').innerText = `${error}`;
    }
}

window.onload = () => fetchJoke();