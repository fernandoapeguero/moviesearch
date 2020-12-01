
import './App.css';
import SearchMovies from "./Component/SearchMovies";
import MovieList from "./Component/MovieList";
import React , {useState} from "react";

function App() {

  const [inputName , changeInputName] = useState("")
  const [movies , setMovieList] = useState([])


  const updateQueryInput = (e) => {
    const movieName = e.target.value
    changeInputName(movieName)
  }


  const movieApiSearch = async (e) => {
    e.preventDefault();

    console.log(`Calling the Movie Api with ${inputName}`)
    const fixedQueryString = inputName ? inputName.split(" ").join("%20") : "2020";
    
    const apiUrl =  `https://api.themoviedb.org/3/search/movie?api_key=<<api key>>&language=en-US&query=${fixedQueryString}&page=1&include_adult=false`  
    
    const result = await fetch(apiUrl)
    
    const json = await result.json()

    setMovieList(json.results)

    console.log( movies);
  }



  return (
    <div className="container">
          <h1 className="title">React Movie Search</h1>
          <SearchMovies updateQueryInput={updateQueryInput} queryValue={inputName} movieApiSearch={movieApiSearch} />
          {movies.length > 0 && <MovieList  movies={movies}/>}
    </div>
  );
}

export default App;
