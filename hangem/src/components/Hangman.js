import react, { useState, useEffect } from 'react';

export default function Hangman({duration = 120000}) {
    let word = "WUKONG";
    const alphabets = ["A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T","U","V","W","X", "Y", "Z" ];
    const [correctGu, setcorrectGu] = useState([])
    const [timeUp, setTimeUp] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimeUp(true);
        }, duration);
        return () => clearTimeout(timeout)
    }, [])
    const maskedWord = word.split('').map(letter => 
        correctGu.includes(letter) ? letter: "_").join(" ");
    
    return <div>
        <p>{maskedWord}</p>
        {
            alphabets.map((alphabet, index) =>
            <button key={index} onClick={() => {
                if (word.includes(alphabet)) {
                    setcorrectGu([...correctGu, alphabet])
                }
            }}>{alphabet}</button>)
            }
            {!maskedWord.includes("_") && <p>You won!</p>}
    </div>
    
}