import React from 'react';
import './index.css';
import Search from './components/search';
import { useState } from 'react';

// Main App Component
const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

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
                </div>
            </main>
        </>
    );
};

export default App;
