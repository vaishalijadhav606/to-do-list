import React, { Component } from 'react'

export class TodoInput extends Component {
    render() {
        const {item,handleChange, handleSubmit, editItem} = this.props

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Add to Todo item" value={item} onChange={handleChange}/>
                    </div>
                    <button className={
                        editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"
                    } type="submit">
                    {editItem ? "Edit item" : "Add item"}
                    </button>
                </form>
            </div>
        )
    }
}

export default TodoInput
