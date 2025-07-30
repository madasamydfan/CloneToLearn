import React, { useState } from 'react';
import TrendingCard from '../components/TrendingCard';
import MoviePopupCard from './MoviePopupCard ';
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
   

const getMovieDetails = (number) => {
    const details = movieDetails.find(movie => movie.id === number);
    return details;
}

const [showMoviePopUp, setShowMoviePopUp] = useState(false);
const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);
    
    const handleMovieOnClick = (number) => {
        console.log('Clicked movie number:', number);
        const details = getMovieDetails(number);
        console.log(details);
        if (details) {
            setSelectedMovieDetails(details);
            setShowMoviePopUp(true);
        }
    };

    const handleClosePopup = () => {
        setShowMoviePopUp(false);
        setSelectedMovieDetails(null);
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

            {/* Movie Popup Card */}
            {showMoviePopUp && selectedMovieDetails && (
                <div className="popup-overlay" onClick={handleClosePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={handleClosePopup}>×</button>
                        <MoviePopupCard 
                            posterImage={selectedMovieDetails.posterImage}
                            titleImage={selectedMovieDetails.titleImage}
                            tags={selectedMovieDetails.tags}
                            description={selectedMovieDetails.description}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrendingPages;
