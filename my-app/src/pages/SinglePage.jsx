import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './single.css';
import { Link } from 'react-router-dom';
const SinglePage = () => {
    const { imdbID } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const apiUrl = "https://www.omdbapi.com/";
    const apiKey = "47bb27dc";

    useEffect(() => {
        fetchMovieDetail(imdbID);
    }, [imdbID]);

    const fetchMovieDetail = async (id) => {
        try {
            const response = await fetch(`${apiUrl}?i=${id}&apikey=${apiKey}`);
            const data = await response.json();
            setLoading(false);
            if (data.Response === "True") {
                setMovie(data);
                setError('');
            } else {
                setError(data.Error);
            }
        } catch (err) {
            setLoading(false);
            setError('An error occurred while fetching data.');
        }
    };

    return (
        <div className="movie-detail">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {movie && (
                <div className="movie-info">
                    <h1>{movie.Title}</h1>
                    <p><strong>Year:</strong> {movie.Year}</p>
                    <p><strong>Genre:</strong> {movie.Genre}</p>
                    <p><strong>Director:</strong> {movie.Director}</p>
                    <p><strong>Actors:</strong> {movie.Actors}</p>
                    <p><strong>Plot:</strong> {movie.Plot}</p>
                    <Link className='process' to={`https://www.imdb.com/title/${imdbID}`}>Go to watch</Link>
                    <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                  
                </div>
            )}
        </div>
    );
};

export default SinglePage;




