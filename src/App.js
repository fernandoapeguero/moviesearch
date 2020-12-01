
import './App.css';
import SearchMovies from "./Component/SearchMovies";
import MovieList from "./Component/MovieList/MovieList";
import React , {useState} from "react";

function App() {

  const [inputQuery , setInputQuery] = useState("")
  const [movies , setMovieList] = useState([])


  const updateQueryInput = (e) => {
    const movieName = e.target.value
    setInputQuery(movieName)
  }


  const movieApiSearch = async (e) => {
    e.preventDefault();

    console.log(`Calling the Movie Api with ${inputQuery}`)
    const fixedQueryString = inputQuery ? inputQuery.split(" ").join("%20") : "crime";
    
    const apiUrl =  `https://api.themoviedb.org/3/search/movie?api_key=<<api key>>&language=en-US&query=${fixedQueryString}&page=1&include_adult=false`  
    console.log(apiUrl)
    const result = await fetch(apiUrl)
    
    const json = await result.json()

    setMovieList(json.results)

    console.log( movies);
  }



  return (
    <div className="container">
          <h1 className="title">React Movie Search</h1>
          <SearchMovies updateQueryInput={updateQueryInput} queryValue={inputQuery} movieApiSearch={movieApiSearch} />
          {movies.length > 0 && <MovieList  movies={movies}/>}
    </div>
  );
}

export default App;
