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
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

            const response = await fetch(endpoint, API_OPTIONS);

            // alert(response);

            // start here //////////////////////////////////////?????????????
        } catch (error) {
            console.error(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. Please try again later.');
        }
    };

    // useEffect - API - Application Programming Interface -> a set of rules that allows one software application to talk to another
    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <>
            <main>
                <div className="pattern" />
                <div className="wrapper">
                    <header>
                        <img src="./hero.png" alt="Hero Banner" />

                        <h1>
                            Find <span className="text-gradient">Movies</span>
                            You Will Enjoy Without the Hassle
                        </h1>

                        {/* Search component */}
                        <Search
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                    </header>

                    {/* Movies display */}
                    <section className="all-movie">
                        <h2>All Movies</h2>
                        {errorMessage && (
                            <p className="text-red-500">{errorMessage}</p>
                        )}
                    </section>
                </div>
            </main>
        </>
    );
};

export default App;
