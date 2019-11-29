import React, { Component } from 'react';
import ReactDom from 'react-dom';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import uuid from 'uuid';
 
class App extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            items: [],
            id: uuid(),
            item: '',
            editItem: false
        }
    }

    handleChange = e => {
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            title: this.state.item
        }

        if(newItem.title !== ""){
            const updateItems = [...this.state.items,newItem]
    
            this.setState({
               items: updateItems,
               item: '' ,
               id: uuid(),
               editItem: false
            });
        }
        
    };

    clearList = () => {
        this.setState({
            items : []
        })
    }

    handleDelete = id => {
        const filteredItems = this.state.items.filter(item => item.id != id)
        this.setState({
            items: filteredItems
        })
    }

    handleEdit = id => {
        console.log(id)
        const filteredItems = this.state.items.filter(item =>  item.id != id);
        const selectedItems = this.state.items.find(item => item.id === id);
        console.log(selectedItems)
        this.setState({
            items: filteredItems,
            item: selectedItems.title,
            editItem: true,
            id: id
        })
    }

    render(){
        return (
            <div className="container my-3">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <h3 className="text-center">Todo Input</h3>
                        <TodoInput item={this.state.item} 
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit}
                        editItem={this.state.editItem}
                        />
                        <TodoList items={this.state.items} 
                        clearList={this.clearList} 
                        handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;