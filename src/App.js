import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div className="App">
            <Header />
            <Form
                setInputText={setInputText}
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
            />
            <TodoList todos={todos} setTodos={setTodos} />
            <Footer />
        </div>
    );
}

export default App;
