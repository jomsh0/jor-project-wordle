import React from 'react'

export default function GuessInput({ onGuess }) {
    const [guess, setGuess] = React.useState('')
    
    return (
        <form
            className="guess-input-wrapper"
            onSubmit={event => {
                event.preventDefault()
                onGuess(guess)
                setGuess('')
            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                value={guess}
                pattern='[A-Z]{5}'
                required
                maxLength={5}
                onChange={event => setGuess(event.target.value.toUpperCase())}
            />
        </form>
    )
}