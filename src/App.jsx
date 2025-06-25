import React from 'react';
import './index.css';
import Search from './components/search';
import { useState, useEffect } from 'react';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_APT_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    },
};

// Main App Component
const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const fetchMovies = async () => {
        try {
        } catch (error) {
            console.error(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. Please try again later.');
        }
    };

    // useEffect - API - Application Programming Interface -> a set of rules that allows one software application to talk to another
    useEffect(() => {}, []);

    return (
        <>
            <main>
                <div className="pattern" />
                <div className="wrapper">
                    <header>
                        <img src="./hero.png" alt="Hero Banner" />
                        {/* <h1>
                            Find <span className="text-gradient">Movies</span>{' '}
                            You'll Enjoy Without the Hassle
                        </h1> */}
                        <h1>
                            Find <span className="text-gradient">Movies</span>
                            You Will Enjoy With the Hassle
                        </h1>
                    </header>
                    {/* Search component */}
                    <Search
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                    {/* <h1 className='text-white'>{searchTerm}</h1> */}
                </div>
            </main>
        </>
    );
};

export default App;
