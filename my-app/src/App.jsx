
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieSearch from './pages/MovieSearch';
import WatchList from './pages/WatchList';
import Basket from './pages/Basket';
import "./App.css";
import SinglePage from './pages/SinglePage';
import Header from './components/Header';

function App() {
    const [watchList, setWatchList] = useState([]);
    const [basket, setBasket] = useState([]);

    const addToWatchList = (movie) => {
  

        const newWatchList = [...watchList, movie];
        setWatchList(newWatchList);
        setBasket(newWatchList);
    };

    const addToBasket = (movie) => {
        setBasket(prevBasket => [...prevBasket, movie]);
    };
    const removeFromWatchList = (index) => {
        

        const newWatchList = watchList.filter((_, i) => i !== index);
        setWatchList(newWatchList);
        setBasket(newWatchList); 
    };
    const removeFromBasket = (index) => {
   
        const newBasketList = basket.filter((_, i) => i !== index);
        setWatchList(newBasketList);
        setBasket(newBasketList); 
    };
    return (
        <Router>
            <div className="App">
           
            <Header/>
        
                <Routes>
                    <Route path="/" element={
                        <div className="container">
                           <div className="movies"> <MovieSearch addToWatchList={addToWatchList} /></div>
                           <div className="watch"> <WatchList watchList={watchList} addToBasket={addToBasket}  removeFromWatchList={removeFromWatchList}  /></div>
                        </div>
                    } />
                    <Route path="/basket" element={<Basket basket={basket} removeFromBasket={removeFromBasket} />} /> 
                    <Route path="/movie/:imdbID" element={<SinglePage/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;



