import { useState } from "react"

const urlBase = 'https://api.themoviedb.org/3/search/movie'
const api_key = '65021451a394e28f3dea93eeda0fe97f'

export const MovieSearch = () => {

     const [search,setSeach] =useState('')
     const [movies,setMovies] = useState([])

     const handleInputChange = (event) => {
        setSeach(event.target.value)
     }

     const handleSubmit = (e) => {
        e.preventDefault()
        fetchFilm()
     }

     const fetchFilm = () => {
        fetch (`${urlBase}?query=${search}&api_key=${api_key}`)
            .then(res => res.json())
            .then (data => {
                 //Si no pasamos los resultados el array se queda atras
                setMovies (data.results)
            })
     }

  return (
    <>
    <div className="container">
        <h1>Movie Search App</h1>
        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Introduce a movie" value={search} onChange={handleInputChange}></input>
            <button type="submit" className="search-button">Search</button>

        </form>
        <div className="movie-list">
            {movies.map(movie =>(
                <div key={movie.id} className="movie-card">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={'NOT AVAIABLE'} />
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>))}
        </div>

        <></>
    </div>
    </>
  )
}
