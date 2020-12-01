import React from "react";


const MovieCard = ({movie}) => {

    const imageUrl = "https://image.tmdb.org/t/p/original"
    return(
        <div className="card">
            <img 
                className="poster_image" 
                src={imageUrl + movie.poster_path} 
                alt="" />
            <div className="info">
                <h1>{movie.original_title}</h1>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}


export default MovieCard;