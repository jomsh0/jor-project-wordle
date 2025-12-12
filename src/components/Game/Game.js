import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput'
import GuessList from '../GuessList'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

// TODO: logic to detect whether mobile keyboard is obstructing game
// (whether GuessList is fully visible)
const detectObstructed = (el) => {
  if (!el) {
    return false
  }
  const { top, height } = el.getBoundingClientRect()
  return (top + height < 0.75 * height)
}

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const gameRef = React.useRef(null)

  const status = getStatus(guesses)

  return (
    <div className="game-wrapper">    
      {status === 'won' && <HappyBanner numGuesses={guesses.length} />}
      {status === 'lost' && <SadBanner />}
      <GuessList guesses={guesses} answer={answer} ref={gameRef} />
      <GuessInput disabled={status !== 'active'} onGuess={
        guess => {
          setGuesses([...guesses, guess])
          if (detectObstructed(gameRef.current)) {
            document.activeElement.blur()
          }
        }
      } />
    </div>
  )
}

function getStatus(guesses) {
  if (guesses.includes(answer)) {
    return 'won'
  } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
    return 'lost'
  } else {
    return 'active'
  }
}

const HappyBanner = ({ numGuesses }) => (
  <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>
        {numGuesses} {numGuesses === 1 ? 'guess' : 'guesses'}
      </strong>.
    </p>
  </div>
)

const SadBanner = () => (
  <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>
)

export default Game;
