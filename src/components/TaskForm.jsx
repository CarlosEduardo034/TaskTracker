import { useState } from 'react';

function TaskForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    onAdd(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="Task-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nova Tesk..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;
