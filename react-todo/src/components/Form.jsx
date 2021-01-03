import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    render() {
        return (
            <div className="form">
                <form name="todoform" onSubmit={this.props.handleAdd}>
                    <div className="todo">
                        <div className="input-area">
                            <label>タイトル</label>
                            <input name="title" type="text" className="title-text" required/>
                            <label>内容</label>
                            <input name="content" type="text" className="content-text" required/>
                            <div className="button-area">
                                <button type="submit" className="form-button">Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

export default Form;