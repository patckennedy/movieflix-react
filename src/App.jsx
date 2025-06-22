import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';

// Card component
const Card = ({ title }) => {
    // useState
    const [hasLiked, setHasLiked] = useState(false);

    //useEffect - for every time a uses like a movies - our app should log something to the browser console
    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`);
    });

    return (
        <div className="card">
            <h2>{title}</h2>

            {/* //button */}
            <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked ? '❤️' : '🤍'}
            </button>
        </div>
    );
};

// Main App component
const App = () => {
    return (
        <div className="card-container">
            <Card title="Star Wars" />
            <Card title="Avatar" />
            <Card title="The Lion King" />
        </div>
    );
};

export default App;
