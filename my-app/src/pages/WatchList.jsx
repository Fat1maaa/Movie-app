
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../pages/list.css"
const WatchList = ({ watchList, addToBasket,removeFromWatchList}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSave = () => {
      
        if (inputValue.trim() !== '') {
            const movie = { Title: inputValue.trim() };
            addToBasket(movie);
            setInputValue('');
        }
    };

    return (
        <div className="watch-list">
            <h2>Watch List</h2>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter movie title"
                />
                <button onClick={handleSave}>Save List</button>
            </div>
            <ul>
                {watchList.map((movie, index) => (
                    <li className='list' key={index}>{movie.Title}
                    <button className="delete" onClick={() => removeFromWatchList(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/basket">
                <button>Go to Basket</button>
            </Link>
        </div>
    );
};

export default WatchList;


