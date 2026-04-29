import { useState } from "react";

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
      const updated = [...object];
      updated[wantedit] = {
        title: input,
        work: description,
      };
      setObject(updated);
      setEdit(null);
    } else {
      setObject([...object, { title: input, work: description }]);
    }

    setInput("");
    setDescription("");
  };

  // Edit
  const edit = (index) => {
    setEdit(index);
    setInput(object[index].title);
    setDescription(object[index].work);
  };

  // Delete
  const deleted = (index) => {
    const item = object[index];
    setRecent([...recently, item]);

    const newArr = object.filter((_, i) => i !== index);
    setObject(newArr);
  };

  return (
    <div>
      <h1>Adding Things</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Title"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={addItem}>
        {wantedit !== null ? "Update" : "Add"}
      </button>

      <h1>Search</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <h1>Working On</h1>
      {(search ? filteredItems : object).map((e, index) => (
        <div key={index}>
          {e.title} - {e.work}
          <button onClick={() => edit(index)}>Edit</button>
          <button onClick={() => deleted(index)}>Delete</button>
        </div>
      ))}

      <h1>Recently Deleted</h1>
      {recently.map((e, index) => (
        <div key={index}>
          {e.title} - {e.work}
        </div>
      ))}
    </div>
  );
}

export default Input;