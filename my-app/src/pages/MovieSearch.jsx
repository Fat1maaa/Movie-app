import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../pages/search.css";

const MovieSearch = ({ addToWatchList }) => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    const apiUrl = "https://www.omdbapi.com/";
    const apiKey = "47bb27dc";

    const fetchMovies = async (searchQuery) => {
        try {
            const response = await fetch(`${apiUrl}?s=${searchQuery}&apikey=${apiKey}`);
            const data = await response.json();

            if (data.Response === "True") {
                setMovies(data.Search);
                setError('');
            } else {
                setError(data.Error);
                setMovies([]);
            }
        } catch (err) {
            setError('An error occurred while fetching data.');
        }
    };

    const handleSearch = () => {
        if (query.trim().length > 0) {
            fetchMovies(query);
        } else {
            setMovies([]);
            setError('');
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim().length === 0) {
            setMovies([]);
            setError('');
        }
    };

    
    useEffect(() => {
        fetchMovies('Star Wars'); 
    }, []);

    return (
        <div className='allmovies'>
            <h1>Movie Search</h1>
            <div className="search-bar">
                <input
                    type="text"
                    value={query}
                    className="enter"
                    onChange={handleChange}
                    placeholder="Enter movie title"
                />
                <button className='search' onClick={handleSearch}>Search</button>
            </div>
            {error && <p>{error}</p>}
            <div className='movies'>
                {movies && movies.map((movie) => (
                    <div className='movie' key={movie.imdbID}>
                        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                        <h2>{movie.Title}</h2>
                        <p>Year: {movie.Year}</p>
                        <div className="addread">
                            <button className='add' onClick={() => addToWatchList(movie)}>Add to Watch List</button>
                            <Link className='read' to={`/movie/${movie.imdbID}`}>
                                <button className='readmore'>Read More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSearch;