const url = "https://imdb-top-100-movies.p.rapidapi.com";
const getMovies = async () => {
  const res = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": "3f43a54079msh58e1793bce0ca26p190101jsna9e21c1eded5",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  });
  return await res.json();
};

const addCards = async () => {
  const card_container = document.getElementsByClassName("card-container")[0];
  const movies = await getMovies();
  localStorage.setItem("movies",JSON.stringify(movies))
  console.log( Array.from(movies)
  .slice(0, 20));
  Array.from(movies)
    .slice(0, 20)
    .map((movie) => {
      card_container.innerHTML += 
      `<div class="card" style="width: 18rem;" >
        <img src=${movie.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.description.slice(0,100)} ...</p>
        </div>
      </div>`
    });
};



addCards();
