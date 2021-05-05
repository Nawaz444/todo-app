import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {};
    }

    render() {
        return <h1>About</h1>;
    }
}

export default About;
