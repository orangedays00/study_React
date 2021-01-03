import React, { Component } from 'react';

let style = {
    maxWidth: '700px',
};

let btn = {
    cursor: 'pointer'
};


class Todo extends Component {
    render() {
        const statusName = this.props.done? 'done' : 'undone';
        const status = this.props.done? '未完了' : '完了';
        const todoDelete = this.props.done? '削除する' : '';
        return(
            // テンプレートリテラルで書ける。変数を${}で囲う
            <div className={`${statusName} todo-area`}>
                <div className="todo-header">
                    <div className="Todo">
                        {/* 三項演算子で条件分岐 */}
                        { statusName == 'undone' ?
                            <div className="status">
                            <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props)}} className="act-btn">{status}にする</a>
                            </div>
                            : <div className="status">
                            <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props)}} className="act-btn">{status}にする</a>
                            <a href="" onClick={(e) => { e.preventDefault(); this.props.handleRemove(this.props)}} className="act-btn">{todoDelete}</a>
                            </div>
                        }
                    </div>
                    <div className="time">登録日時：{this.props.time}</div>
                </div>
                <table>
                    <tr>
                        <th>件名：</th>
                        <td>{this.props.title}</td>
                    </tr>
                    <tr>
                        <th>内容：</th>
                        <td>{this.props.content}</td>
                    </tr>
                </table>
            </div>
        );
    }
};

export default Todo;