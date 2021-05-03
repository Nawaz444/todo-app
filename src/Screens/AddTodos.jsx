/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react';

class AddTodos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: '',
        };
        this.addNewToDo = this.addNewToDo.bind(this);
    }

    addNewToDo() {
        const newTodo = this.state.newTodo;
        const add = this.props.add;
        add({
            name: newTodo,
            completed: false,
        });
        this.setState({ newTodo: '' });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter New Todo"
                    onChange={(event) => this.setState({ newTodo: event.target.value })}
                    value={this.state.newTodo}
                />
                <button type="button" onClick={() => this.addNewToDo()}>
                    Add
                </button>
            </div>
        );
    }
}

export default AddTodos;
