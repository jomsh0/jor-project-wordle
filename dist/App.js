import "./App.css";
import {jsxs as $kyR4X$jsxs, jsx as $kyR4X$jsx} from "react/jsx-runtime";
import $kyR4X$react from "react";




const $4c225ee090a8f350$export$4812e460280c6ef2 = (arr)=>{
    return arr[Math.floor(Math.random() * arr.length)];
};
const $4c225ee090a8f350$export$4f5d2d50c9deca37 = (...tokens)=>tokens.filter((token)=>token && typeof token === 'string').join(' ');
const $4c225ee090a8f350$export$d02631cccf789723 = (start, end, step = 1)=>{
    let output = [];
    if (typeof end === 'undefined') {
        end = start;
        start = 0;
    }
    for(let i = start; i < end; i += step)output.push(i);
    return output;
};


const $703da7409b6b84ac$export$aa71b5c75a504bc0 = [
    'AGENT',
    'WORLD',
    'ABOUT',
    'HEART',
    'WATER',
    'SIXTY',
    'BOARD',
    'MONTH',
    'MUSIC',
    'PARTY',
    'PIANO',
    'MOUTH',
    'WOMAN',
    'SUGAR',
    'AMBER',
    'DREAM',
    'LAUGH',
    'TIGER',
    'EARTH',
    'MONEY',
    'WORDS',
    'SMILE',
    'LEMON',
    'SOUTH',
    'AFTER',
    'STONE',
    'THING',
    'LIGHT',
    'STORY',
    'POWER',
    'TODAY',
    'RANGE',
    'PEARL',
    'VENOM',
    'PROXY',
    'ROUND',
    'HOVER',
    'CANDY',
    'ABOVE',
    'PHONE',
    'OTHER',
    'SMART',
    'BLACK',
    'MAGIC',
    'FRUIT',
    'RADIO',
    'ROYAL',
    'HONEY',
    'FLAKE',
    'SOUND'
];


const $cc3efe53df664a72$export$5c6373d26cb292a9 = 6;




function $c25ecea5d7a90986$export$2e2bcd8739ae039({ onGuess: onGuess, ...delegated }) {
    const [guess, setGuess] = (0, $kyR4X$react).useState('');
    return /*#__PURE__*/ (0, $kyR4X$jsxs)("form", {
        className: "guess-input-wrapper",
        onSubmit: (event)=>{
            event.preventDefault();
            onGuess(guess);
            setGuess('');
        },
        children: [
            /*#__PURE__*/ (0, $kyR4X$jsx)("label", {
                htmlFor: "guess-input",
                children: "Enter guess:"
            }),
            /*#__PURE__*/ (0, $kyR4X$jsx)("input", {
                ...delegated,
                id: "guess-input",
                value: guess,
                pattern: "[A-Z]{5}",
                required: true,
                autoFocus: true,
                maxLength: 5,
                onChange: (event)=>setGuess(event.target.value.toUpperCase())
            })
        ]
    });
}




/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */ function $4323e23a5c635aef$export$6e90f449c7e09a62(guess, answer) {
    // This constant is a placeholder that indicates we've successfully
    // dealt with this character (it's correct, or misplaced).
    const SOLVED_CHAR = "\u2713";
    if (!guess) return null;
    const guessChars = guess.toUpperCase().split('');
    const answerChars = answer.split('');
    const result = [];
    // Step 1: Look for correct letters.
    for(let i = 0; i < guessChars.length; i++)if (guessChars[i] === answerChars[i]) {
        result[i] = {
            letter: guessChars[i],
            status: 'correct'
        };
        answerChars[i] = SOLVED_CHAR;
        guessChars[i] = SOLVED_CHAR;
    }
    // Step 2: look for misplaced letters. If it's not misplaced,
    // it must be incorrect.
    for(let i = 0; i < guessChars.length; i++){
        if (guessChars[i] === SOLVED_CHAR) continue;
        let status = 'incorrect';
        const misplacedIndex = answerChars.findIndex((char)=>char === guessChars[i]);
        if (misplacedIndex >= 0) {
            status = 'misplaced';
            answerChars[misplacedIndex] = SOLVED_CHAR;
        }
        result[i] = {
            letter: guessChars[i],
            status: status
        };
    }
    return result;
}



function $486aae2b83203c5c$export$2e2bcd8739ae039({ answer: answer, children: children }) {
    const boxes = typeof children === 'string' ? (0, $4323e23a5c635aef$export$6e90f449c7e09a62)(children, answer) : new Array(5).fill({});
    return /*#__PURE__*/ (0, $kyR4X$jsx)("p", {
        className: "guess",
        children: boxes.map(({ letter: letter = '', status: status } = {}, index)=>/*#__PURE__*/ (0, $kyR4X$jsx)("span", {
                className: (0, $4c225ee090a8f350$export$4f5d2d50c9deca37)('cell', status),
                children: letter
            }, index))
    });
}




function $5376c52ebd29c342$export$2e2bcd8739ae039({ guesses: _guesses, answer: answer }) {
    const guesses = _guesses.slice(0, (0, $cc3efe53df664a72$export$5c6373d26cb292a9));
    const numBlanks = (0, $cc3efe53df664a72$export$5c6373d26cb292a9) - guesses.length;
    return /*#__PURE__*/ (0, $kyR4X$jsxs)("div", {
        className: "guess-results",
        children: [
            guesses.map((guess, i)=>/*#__PURE__*/ (0, $kyR4X$jsx)((0, $486aae2b83203c5c$export$2e2bcd8739ae039), {
                    answer: answer,
                    children: guess
                }, i)),
            (0, $4c225ee090a8f350$export$d02631cccf789723)(numBlanks).map((_, i)=>/*#__PURE__*/ (0, $kyR4X$jsx)((0, $486aae2b83203c5c$export$2e2bcd8739ae039), {}, guesses.length + i))
        ]
    });
}


// Pick a random word on every pageload.
const $40e426ba79875e01$var$answer = (0, $4c225ee090a8f350$export$4812e460280c6ef2)((0, $703da7409b6b84ac$export$aa71b5c75a504bc0));
// To make debugging easier, we'll log the solution in the console.
console.info({
    answer: $40e426ba79875e01$var$answer
});
function $40e426ba79875e01$var$Game() {
    const [guesses, setGuesses] = (0, $kyR4X$react).useState([]);
    const status = $40e426ba79875e01$var$getStatus(guesses);
    return /*#__PURE__*/ (0, $kyR4X$jsxs)("div", {
        className: "game-wrapper",
        children: [
            status === 'won' && /*#__PURE__*/ (0, $kyR4X$jsx)($40e426ba79875e01$var$HappyBanner, {
                numGuesses: guesses.length
            }),
            status === 'lost' && /*#__PURE__*/ (0, $kyR4X$jsx)($40e426ba79875e01$var$SadBanner, {}),
            /*#__PURE__*/ (0, $kyR4X$jsx)((0, $5376c52ebd29c342$export$2e2bcd8739ae039), {
                guesses: guesses,
                answer: $40e426ba79875e01$var$answer
            }),
            /*#__PURE__*/ (0, $kyR4X$jsx)((0, $c25ecea5d7a90986$export$2e2bcd8739ae039), {
                disabled: status !== 'active',
                onGuess: (guess)=>setGuesses([
                        ...guesses,
                        guess
                    ])
            })
        ]
    });
}
function $40e426ba79875e01$var$getStatus(guesses) {
    if (guesses.includes($40e426ba79875e01$var$answer)) return 'won';
    else if (guesses.length >= (0, $cc3efe53df664a72$export$5c6373d26cb292a9)) return 'lost';
    else return 'active';
}
const $40e426ba79875e01$var$HappyBanner = ({ numGuesses: numGuesses })=>/*#__PURE__*/ (0, $kyR4X$jsx)("div", {
        className: "happy banner",
        children: /*#__PURE__*/ (0, $kyR4X$jsxs)("p", {
            children: [
                /*#__PURE__*/ (0, $kyR4X$jsx)("strong", {
                    children: "Congratulations!"
                }),
                " Got it in",
                ' ',
                /*#__PURE__*/ (0, $kyR4X$jsxs)("strong", {
                    children: [
                        numGuesses,
                        " ",
                        numGuesses === 1 ? 'guess' : 'guesses'
                    ]
                }),
                "."
            ]
        })
    });
const $40e426ba79875e01$var$SadBanner = ()=>/*#__PURE__*/ (0, $kyR4X$jsx)("div", {
        className: "sad banner",
        children: /*#__PURE__*/ (0, $kyR4X$jsxs)("p", {
            children: [
                "Sorry, the correct answer is ",
                /*#__PURE__*/ (0, $kyR4X$jsx)("strong", {
                    children: $40e426ba79875e01$var$answer
                }),
                "."
            ]
        })
    });
var $40e426ba79875e01$export$2e2bcd8739ae039 = $40e426ba79875e01$var$Game;






function $6ce4b7896c7bb5ca$var$Header() {
    return /*#__PURE__*/ (0, $kyR4X$jsx)("header", {
        className: "header",
        children: /*#__PURE__*/ (0, $kyR4X$jsx)("h1", {
            className: "title",
            children: "Word Game"
        })
    });
}
var $6ce4b7896c7bb5ca$export$2e2bcd8739ae039 = $6ce4b7896c7bb5ca$var$Header;





function $816ebe2695f1b086$var$App() {
    return /*#__PURE__*/ (0, $kyR4X$jsxs)("div", {
        className: "game-wrapper-wrapper",
        children: [
            /*#__PURE__*/ (0, $kyR4X$jsx)((0, $6ce4b7896c7bb5ca$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $kyR4X$jsx)((0, $40e426ba79875e01$export$2e2bcd8739ae039), {})
        ]
    });
}
var $816ebe2695f1b086$export$2e2bcd8739ae039 = $816ebe2695f1b086$var$App;


export {$816ebe2695f1b086$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=App.js.map
