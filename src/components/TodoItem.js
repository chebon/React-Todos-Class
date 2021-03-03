import React from "react";
class TodoItem extends React.Component {
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#c5e2d2",
            textDecoration: "line-through"
        };
        const { completed, id, title } = this.props.todo
        return (
            <li className="todo-item">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => this.props.handleChange(id)}
                />
                <span style={completed ? completedStyle :
                    null}>{title}</span>
                <button className="btn-style" onClick={() =>
                    this.props.deleteTodo(id)}> X </button>
            </li>
        );
    }
}
export default TodoItem;