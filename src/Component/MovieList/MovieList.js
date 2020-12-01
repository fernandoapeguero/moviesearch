import React from "react";
import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";



const MovieList = ({movies}) => {

    
    return (

        <div className="cards_holder">
            {
                movies.filter(movie => movie.poster_path).map(movie => <MovieCard movie={movie}  key={movie.id}/>)  
                
            }
        </div>        
    )
}


export default MovieList;



/* <div className="card" key={movie.id}>
<img 
    className="poster_image" 
    src={movie.poster_path ?  imageUrl + movie.poster_path : "data:image/jpeg;base64,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"} 
    alt="" />
<div className="info">
    <h1>{movie.original_title}</h1>
    <p>{movie.overview}</p>
</div>

</div> */