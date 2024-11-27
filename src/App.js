import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo//ternary operator
                
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div style={{ margin: '40px auto', width: '60%', textAlign: 'center' }}>
            <h1>To-Do List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList 
                todos={todos} 
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo} 
            />
        </div>
    );
};

export default App;
