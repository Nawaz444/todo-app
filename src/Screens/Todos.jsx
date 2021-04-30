/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react';

// passing props between components
class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                name: 'Get Milk',
                completed: false,
            }, {
                name: 'Get Milk',
                completed: false,
            }, {
                name: 'Get Milk',
                completed: false,
            }, {
                name: 'Get Milk',
                completed: true,
            }],
        };
        this.onCompletedChange = this.onCompletedChange.bind(this);
    }

    onCompletedChange(index) {
        const todos = this.state.todos;

        todos[index].completed = !todos[index].completed;

        this.setState({
            todos,
        });
    }

    render() {
        const todos = this.state.todos;
        const items = [];
        for (let i = 0; i < todos.length; i += 1) {
            items.push(
                <div key={i}>
                    <input
                        type="checkbox"
                        id={i}
                        checked={todos[i].completed}
                        onChange={() => {
                            this.onCompletedChange(i);
                        }}
                    />
                    <label htmlFor={i}>{todos[i].name}</label>
                </div>,
            );
        }

        return (
            <div>
                {items}
            </div>
        );
    }
}

export default Todos;
