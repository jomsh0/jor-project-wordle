import { checkGuess } from '../game-helpers'
import { clsx } from '../utils'

export default function Guess({ answer, children }) {
    const boxes = typeof children === 'string'
        ? checkGuess(children, answer)
        : new Array(5).fill({})

    return (
        <p className="guess">
            {boxes.map(({ letter = '', status } = {}, index) => (
                <span className={clsx('cell', status)} key={index}>{letter}</span>
            ))}
        </p>
    )
}