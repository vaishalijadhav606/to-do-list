import React, { Component } from 'react';
import './todo.scss'

export class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } =this.props
        return (
           <li className="list-group-item d-flex justify-content-between my-2">
               <h6>{title}</h6>
               <div className="todo-icon">
                    <span className="mx-2 cursor-pointer text-success" onClick={handleEdit}>
                        <i class="fa fa-pencil"></i>
                    </span>
                    <span className="mx-2 cursor-pointer text-danger" onClick={handleDelete}>
                        <i class="fa fa-trash-o"></i>
                    </span>
               </div>
           </li>
        )
    }
}

export default TodoItem
