import React from 'react'

export default function GuessInput({ onGuess, ...delegated }) {
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
                {...delegated}
                id="guess-input"
                value={guess}
                maxLength={5}
                minLength={5}
                pattern='[A-Z]{5}'
                required
                autoFocus
                enterKeyHint='done'
                onChange={event => setGuess(event.target.value.toUpperCase())}
            />
        </form>
    )
}
