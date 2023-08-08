import React from 'react';

function Letter({ letter, status, selectLetter }) {
    return (
        <span
            className={status ? 'crossed-out' : ''}
            // onClick={() => selectLetter && selectLetter(letter)}
            onClick={status ? undefined : () => selectLetter && selectLetter(letter)}
        >
            {letter}
        </span>
    );
}

export default Letter;
