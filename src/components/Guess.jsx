export default function Guess({ children }) {
    const letters = children
        ? [...children]
        : ['', '', '', '', '']

    return (
        <p className="guess">
            {letters.map((letter, index) => (
                <span className="cell" key={index}>{letter}</span>
            ))}
        </p>
    )
}