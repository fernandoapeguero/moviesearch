import React  from "react";



const SearchMovies = ({updateQueryInput , queryValue , movieApiSearch}) => {

    return (
        <form className="form" onSubmit={movieApiSearch}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="Jurrasic park" value={queryValue} onChange={updateQueryInput}/>
            <button type="submit" className="button">Submit</button>
        </form>
    )

}

export default SearchMovies