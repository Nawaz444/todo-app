import React, { useState } from 'react';
import { render } from 'react-dom';

function App() { // functional component
    const [num, setNum] = useState(0);

    function add() {
        setNum(num + 10);
    }

    function sub() {
        setNum(num - 1);
    }

    function multi() {
        setNum(num * 10);
    }

    function div() {
        setNum(num / 5);
    }

    return (
        <div>
            <h1>{num}</h1>
            <button
                type="button"
                onClick={add}
            >
                Add (+)
            </button>

            <button
                type="button"
                onClick={sub}
            >
                sub (-)
            </button>

            <button
                type="button"
                onClick={multi}
            >
                multi(*)
            </button>

            <button
                type="button"
                onClick={div}
            >
                div(/)
            </button>

        </div>
    );
}

render(<App />, document.getElementById('root'));
