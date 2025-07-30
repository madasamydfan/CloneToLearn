import React, { useState } from 'react';
import TrendingCard from '../components/TrendingCard';
import './TrendingPages.css';
import mov1 from  '../assets/img/mov1.webp';
import mov2 from  '../assets/img/mov2.webp';
import mov3 from  '../assets/img/mov3.webp';
import mov4 from  '../assets/img/mov4.webp';
import mov5 from  '../assets/img/mov5.webp';
import movieDetails from '../constants/moviedetails';
const TrendingPages = () => {
    const trendingItems = [
        { image: mov1, number: 1 },
        { image: mov2, number: 2 },
        { image: mov3, number: 3 },
        { image: mov4, number: 4 },
        { image: mov5, number: 5 },
    ];
   

const [showMoviePopUp,setShowMoviePopUp]= useState(false);
    const handleMovieOnClick = (number) => {
        // handle logic here, e.g., navigate or show details
        console.log('Clicked movie number:', number);
        get
        setShowMoviePopUp(true);


    };

    return (
        <div className='Trendingpages'>
            <h2 style={{ color: 'white', marginBottom: '10px', marginLeft: '200px' }}>Trending Now</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px' }}>
                {trendingItems.map((item) => (
                    <div key={item.number} onClick={() => handleMovieOnClick(item.number)}>
                        <TrendingCard image={item.image} number={item.number} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingPages;
