import React from "react";
import "../App.css";

const Form = ({ setInputText, inputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const clickHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
        setInputText("");
    };

    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-in"
                placeholder="Enter todo items:"
            />
            <button onClick={clickHandler} className="todo-btn" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
};

export default Form;
