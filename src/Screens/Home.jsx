/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react';
import qs from 'querystring';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const history = this.props.history;
        history.push('/about');
    }

    render() {
        const location = this.props.location;
        const removedQuertion = location.search.slice(1);
        const parsed = qs.parse(removedQuertion);
        return <h1 onClick={this.onClick}>{parsed.company}</h1>;
    }
}

export default Home;
