import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onCheckItem, onDeleteItems }) {
  const [sortBy, SetSortBy] = useState("input");
  let sortedItems = items;

  if (sortBy === "input") sortedItems = items;

  else if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

  else if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => SetSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onDeleteItems}>Clear List</button>
      </div>
    </div>
  );
}
