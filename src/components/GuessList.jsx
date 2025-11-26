import Guess from "./Guess"

export default function GuessList({ guessHistory }) {
    return (
        <div className="guess-results">
            {guessHistory.map((guess, index) => (
                <Guess key={index}>{guess}</Guess>
            ))}
        </div>
    )
}