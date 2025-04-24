function TaskList({ Tasks, onToggle, onDelete }) {
    if (Tasks.length === 0) {
      return <p>Sem hábitos ainda. Adicione um! 💪</p>;
    }
  
    return (
      <ul className="Task-list">
        {Tasks.map(Task => (
          <li key={Task.id} className={Task.checked ? 'checked' : ''}>
            <label>
              <input
                type="checkbox"
                checked={Task.checked || false}
                onChange={() => onToggle(Task.id)}
              />
              {Task.name}
            </label>
            <button
              onClick={() => onDelete(Task.id)}
              className="delete-btn"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;
  