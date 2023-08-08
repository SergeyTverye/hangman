import React from 'react';

function EndGame({ score, word, restartGame }) {
    return (
        <div>
            {score > 0 ? (
                <h2>Congratulations! You win!</h2>
            ) : (
                <>
                    <h2>Sorry, you lose.</h2>
                    <p>The word was: {word}</p>
                </>
            )}
            <button onClick={restartGame}>Restart Game</button>
        </div>
    );
}

export default EndGame;
