import React, { Component } from 'react';
import Form from './Form';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd(e) {
    // console.log(e.target.title.value);
    e.preventDefault();

    // 登録した時間を取得し、整形。timeに格納。
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const time = now.getHours() + ':' + now.getMinutes();

    const title = e.target.title.value;
    const content = e.target.content.value;
    const actTime =  month + '/' + day + ' ' + time;
    const todoList = this.state.todoList.slice();

    todoList.push({
      title:title,
      content:content,
      time: actTime,
      done:false
    });

    this.setState({ todoList });

    e.target.title.value = "";
    e.target.content.value = "";
  }

  setTodoStatus(click) {
    const todoList = this.state.todoList.slice();
    const todo = todoList[click.index];
    todo.done = !todo.done;
    todoList[click] = todo;

    this.setState({ todoList });
  }

  handleRemove(click) {

    const todoList = this.state.todoList.slice();
    todoList.splice(click.index, 1);
    this.setState({ todoList });
  }

  render() {
    return (
      <div className="">
        <h1 className="">React ToDo App</h1>
        <Form handleAdd={this.handleAdd} />
        <div className=""></div>
        <List todoList={this.state.todoList} setTodoStatus={this.setTodoStatus.bind(this)} handleRemove={this.handleRemove.bind(this)} />
      </div>
    );
  }
}



// export default CountApp;
