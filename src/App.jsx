import React from 'react';
import './index.css';
import Search from './components/search';
import { useState, useEffect } from 'react';
import Spinner from './components/spinner';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';

// API
const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

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
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    // Debounce the search term to prevent making too many API requests
    // by waiting for the user to stop typing for 500ms
    useDebounce(
        () => {
            fetchMovies(searchTerm);
        },
        500,
        [searchTerm]
    );
      

    const fetchMovies = async (query = '') => {
        setIsLoading(true);
        setErrorMessage('');

        try {
            const endpoint = query
                ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(
                      query
                  )}`
                : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

            const response = await fetch(endpoint, API_OPTIONS);

            // alert(response);

            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }

            const data = await response.json();

            // console.log(data);
            if (data.Response == 'false') {
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setMovieList([]);
                return;
            }

            setMovieList(data.results || []);
            // Catch error if any
        } catch (error) {
            console.error(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    // useEffect -
    // useEffect(() => {
    //     fetchMovies(debouncedSearchTerm);
    // }, [debouncedSearchTerm]);
      

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
                        <h2 className="mt-[40px]">All Movies</h2>

                        {isLoading ? (
                            <Spinner />
                        ) : errorMessage ? (
                            <p className="text-red-500">{errorMessage}</p>
                        ) : (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                                {movieList.map((movie) => (
                                    <MovieCard key={movie.id} movie={movie} />
                                ))}
                            </ul>
                        )}
                    </section>
                </div>
            </main>
        </>
    );
};

export default App;
