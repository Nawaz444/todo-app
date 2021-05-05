import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

// import Todos from './Screens/Todos';
import Home from './Screens/Home';
import About from './Screens/About';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <div>
                        <h1>Nawaz</h1>
                        <Route component={Home} path="/" exact />
                        <Route component={About} path="/about" />
                    </div>
                </Switch>
            </Router>
        );
    }
}

render(<App />, document.getElementById('root'));
