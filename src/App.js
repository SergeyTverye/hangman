import React, { useState } from 'react';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import EndGame from './components/EndGame';
import wordsWithHints from './data/wordsWithHints';
import './App.css';

function App() {
    const generateLetterStatuses = () => {
        let letterStatus = {};
        for (let i = 65; i < 91; i++) {
            letterStatus[String.fromCharCode(i)] = false;
        }
        return letterStatus;
    };

    const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
    const randomWordWithHint = wordsWithHints[Math.floor(Math.random() * wordsWithHints.length)];
    const [solution, setSolution] = useState(randomWordWithHint);
    const [score, setScore] = useState(100);

    const selectLetter = (letter) => {
        let newLetterStatus = { ...letterStatus };
        newLetterStatus[letter] = true;

        if (solution.word.includes(letter)) {
            setScore(prevScore => prevScore + 5);
        } else {
            setScore(prevScore => prevScore - 20);
        }

        setLetterStatus(newLetterStatus);
    };

    const restartGame = () => {
        setLetterStatus(generateLetterStatuses());
        const randomWordWithHint = wordsWithHints[Math.floor(Math.random() * wordsWithHints.length)];
        setSolution(randomWordWithHint);
        setScore(100);
    };

    const allLettersGuessed = [...solution.word].every(letter => letterStatus[letter]);

    return (
        <div>
            {score <= 0 || allLettersGuessed
                ? <EndGame score={score} word={solution.word} restartGame={restartGame} />
                : (
                    <>
                        <Score score={score} />
                        <Solution letterStatus={letterStatus} solution={solution} />
                        <Letters letterStatus={letterStatus} selectLetter={selectLetter} />
                    </>
                )
            }
        </div>
    );
}

export default App;
