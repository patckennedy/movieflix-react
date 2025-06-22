import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';

// Card component
const Card = ({ title }) => {
    //check the number of time use click a movies app.
    const [count, setCount] = useState(0);
    // useState
    const [hasLiked, setHasLiked] = useState(false);

    //useEffect - for every time a uses like a movies - our app should log something to the browser console
    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`);
    }, [hasLiked]);

    return (
        <div className="card" onClick={() => setCount(count + 1)}>
            <h2>
                {title} <br /> {count || null}
            </h2>

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
