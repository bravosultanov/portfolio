const API_URL = "https://api.themoviedb.org/3/discover/movie/?api_key=24a1f729efb2d9892ee99b4a8ae9defb"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=24a1f729efb2d9892ee99b4a8ae9defb&query="

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ""

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview, release_date } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}
                <div class="date">Release date: <b>${release_date}</b></div>
                </h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
        
    } else if (vote >= 5) {
        return 'orange'
        
    } else {
        return 'red'
        
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_URL + searchTerm)

        search.value = ""
    } else {
        window.location.reload()
    }
})