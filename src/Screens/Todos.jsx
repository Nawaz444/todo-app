/* eslint-disable react/sort-comp */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react';

import AddTodo from './AddTodos';

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
        this.addFunc = this.addFunc.bind(this);
    }

    addFunc(newTodo) {
        const todos = this.state.todos;
        todos.push(newTodo);
        this.setState(todos);
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
        const items = todos.map((item, i) => {
            let label = '';
            if (item.completed) {
                label = <strike>{item.name}</strike>;
            } else {
                label = item.name;
            }
            return (
                <div key={i}>
                    <input
                        type="checkbox"
                        id={i}
                        checked={item.completed}
                        onChange={() => {
                            this.onCompletedChange(i);
                        }}
                    />
                    <label htmlFor={i}>
                        {label}
                    </label>
                </div>
            );
        });

        return (
            <div>
                {items}
                <AddTodo add={this.addFunc} />
            </div>
        );
    }
}

export default Todos;
