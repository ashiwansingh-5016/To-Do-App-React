import { useState } from "react";
import './input.css';

function Input() {
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [wantedit, setEdit] = useState(null);
  const [object, setObject] = useState([]);
  const [recently, setRecent] = useState([]);
  const [search, setSearch] = useState("");

  // Filter logic
  const filteredItems = object.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.work.toLowerCase().includes(search.toLowerCase())
  );

  // Add / Update
  const addItem = () => {
    if (input.trim() === "" || description.trim() === "") return;

    if (wantedit !== null) {
      const updated = object.map(item => 
        item.id === wantedit ? { ...item, title: input, work: description } : item
      );
      setObject(updated);
      setEdit(null);
    } else {
      setObject([...object, { id: Date.now().toString(), title: input, work: description }]);
    }

    setInput("");
    setDescription("");
  };

  // Edit
  const edit = (id) => {
    const itemToEdit = object.find(item => item.id === id);
    if (itemToEdit) {
      setEdit(id);
      setInput(itemToEdit.title);
      setDescription(itemToEdit.work);
    }
  };

  // Delete
  const deleted = (id) => {
    const itemToDelete = object.find(item => item.id === id);
    if (itemToDelete) {
      setRecent([{...itemToDelete, deletedAt: new Date().toLocaleTimeString()}, ...recently]);
      const newArr = object.filter((item) => item.id !== id);
      setObject(newArr);
      
      // Clear edit state if we delete the item we are currently editing
      if (wantedit === id) {
        setEdit(null);
        setInput("");
        setDescription("");
      }
    }
  };

  return (
    <div className="todo-app-wrapper">
      <div className="todo-container">
        <h1 className="todo-title">{wantedit !== null ? "Update Task" : "Add New Task"}</h1>
        <div className="input-group">
          <input
            className="todo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
          />
          <input
            className="todo-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add some details..."
          />
          <button className="todo-button" onClick={addItem}>
            {wantedit !== null ? "Update Task" : "Add Task"}
          </button>
        </div>

        <h1 className="todo-title">Search Tasks</h1>
        <div className="input-group">
          <input
            className="todo-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or description..."
          />
        </div>

        <h1 className="todo-title">Tasks In Progress</h1>
        <div className="list-container">
          {(search ? filteredItems : object).length > 0 ? (
            (search ? filteredItems : object).map((e) => (
              <div className="todo-item" key={e.id}>
                <div className="todo-item-content">
                  <span className="todo-item-title">{e.title}</span>
                  <span className="todo-item-desc">{e.work}</span>
                </div>
                <div className="todo-item-actions">
                  <button className="todo-button-small" onClick={() => edit(e.id)}>Edit</button>
                  <button className="todo-button-small todo-button-danger" onClick={() => deleted(e.id)}>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">No tasks found.</div>
          )}
        </div>

        {recently.length > 0 && (
          <>
            <h1 className="todo-title">Recently Deleted</h1>
            <div className="list-container">
              {recently.map((e) => (
                <div className="todo-item deleted-item" key={e.id + e.deletedAt}>
                  <div className="todo-item-content">
                    <span className="todo-item-title">{e.title}</span>
                    <span className="todo-item-desc">{e.work}</span>
                  </div>
                  <div className="todo-item-actions">
                    <span className="todo-item-desc">Deleted at {e.deletedAt}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Input;