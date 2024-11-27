import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Add a new task"
                style={{ padding: '8px', width: '80%' }}
            />
            <button type="submit" style={{ padding: '8px 16px' }}>Add</button>
        </form>
    );
};

export default TodoForm;
