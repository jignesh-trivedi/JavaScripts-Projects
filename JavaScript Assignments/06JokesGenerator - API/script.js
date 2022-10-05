const jokeEl = document.getElementById("joke");
const getJokeButton = document.getElementById("jokeBtn");

getJokeButton.addEventListener("click", getJoke);

getJoke();

async function getJoke(){
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    });
    const jokeObj = await jokeData.json(); // This will make the data readable
    // console.log(jokeObj.joke);
    jokeEl.innerText = jokeObj.joke;
}