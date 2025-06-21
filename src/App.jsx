import React from 'react';
import './index.css';
import { useState } from 'react';

// Card component
const Card = ({ title }) => {
    const [hasLiked, setHasLiked] = useState(false);

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
