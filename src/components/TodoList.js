import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './todo.scss'

export class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props
        return (    
            <ul className="list-group my-5">
                <h3 className="text-center">Todo List</h3>
                {
                    items.map(item => {
                        return (
                            <TodoItem key={item.id} title={item.title} 
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}/>
                        )
                    })
                }
                <button className="btn btn-danger btn-block mt-5" onClick={clearList}>Clear List</button>
            </ul>
        )
    }
}

export default TodoList
