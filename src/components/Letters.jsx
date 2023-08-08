import React from 'react';
import Letter from './Letter';

function Letters({ letterStatus, selectLetter }) {
    return (
        <div>
            {Object.keys(letterStatus).map((letter) =>
                <Letter
                    key={letter}
                    letter={letter}
                    status={letterStatus[letter]}
                    selectLetter={selectLetter}
                />
            )}
        </div>
    );
}

export default Letters;
