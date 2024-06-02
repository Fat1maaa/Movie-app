

import React, { useState } from 'react';
import WatchList from './pages/WatchList';

const ParentComponent = () => {
    const [watchList, setWatchList] = useState([
    
    ]);

    const saveWatchList = () => {
    
        console.log('Watch list saved:', watchList);
    };

    const removeFromWatchList = (imdbID) => {
        
    };

    const goToBasket = () => {
     
    };

    return (
        <WatchList 
            watchList={watchList} 
            removeFromWatchList={removeFromWatchList} 
            saveWatchList={saveWatchList} 
            goToBasket={goToBasket} 
        />
    );
};

export default ParentComponent;
