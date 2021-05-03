import React from 'react';
import { render } from 'react-dom';

import Todos from './Screens/Todos';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>My Tasks today</h1>
                <Todos />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
