import React from 'react';
import AddTodo from './AddTodo';

const TodoList = () =>{
    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
            <AddTodo/>
            <AddTodo/>
            <AddTodo/>
            <AddTodo/>
        </div>
            )
}

export default TodoList;
