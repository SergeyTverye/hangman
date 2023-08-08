import React from 'react';
import Letter from './Letter';

function Solution({ letterStatus, solution }) {
    return (
        <div className={'solution'}>
            {solution.word.split('').map((letter, index) =>
                <Letter
                    key={index}
                    letter={letterStatus[letter] ? letter : '_'}
                    status={true}
                />
            )}
            <div>{solution.hint}</div>
        </div>
    );
}

export default Solution;
