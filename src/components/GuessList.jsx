import Guess from "./Guess"
import { NUM_OF_GUESSES_ALLOWED } from '../constants'
import { range } from "../utils"

export default function GuessList({ guesses: _guesses, answer }) {
    const guesses = _guesses.slice(0, NUM_OF_GUESSES_ALLOWED)
    const numBlanks = NUM_OF_GUESSES_ALLOWED - guesses.length

    return (
        <div className="guess-results">
            {guesses.map((guess, i) => (
                <Guess key={i} answer={answer}>{guess}</Guess>
            ))}
            {range(numBlanks).map((_, i) => (
                <Guess key={guesses.length + i}></Guess>
            ))}
        </div>
    )
}