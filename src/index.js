import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    var [num, setNum] = useState(0);

    function add() {
        setNum(num + 1)
    }

    return (
        <div>
            <h1>{num}</h1>
            <button
                onClick={add}
            >
                Add one
            </button>
        </div>
    );
}

render(<App />, document.getElementById("root"));