import React, { Component } from 'react';
import Todo from './Todo';
import './List.css'

class List extends Component {
    render() {
        const todoList = [];
        for (var i = 0; i < this.props.todoList.length; i++) {
            todoList.push(
                <Todo index={i} time={this.props.todoList[i].time} title={this.props.todoList[i].title} content={this.props.todoList[i].content} done={this.props.todoList[i].done} setTodoStatus={this.props.setTodoStatus} handleRemove={this.props.handleRemove} />
            );
        }
        return(
            <div className="list-area">
                <div className="board">
                    <span className="board-name">Todo List</span>
                </div>
                <div className="board-list">{todoList}</div>
            </div>
            );
    }
};

export default  List;