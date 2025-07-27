import { useState } from "react";

export function Form({ onAddItems }) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDesc("");
    setQuant(1);

  }
  const [description, setDesc] = useState("");
  const [quantity, setQuant] = useState(1);
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip 🤔</h3>
      <select value={quantity} onChange={(e) => setQuant(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e) => setDesc(e.target.value)}></input>
      <button type="submit">Add</button>
    </form>
  );
}
