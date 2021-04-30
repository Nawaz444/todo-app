import React from 'react';
import { render } from 'react-dom';

import AddTodo from './Screens/AddTodos';
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
                <AddTodo name="fizan" />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
