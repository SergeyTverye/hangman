import React from 'react';

function Score({ score }) {
    let className = score >= 80 ? 'high-score' : score >= 50 ? 'medium-score' : 'low-score';

    return (
        <div className={className}>{score}</div>
    );
}

export default Score;
