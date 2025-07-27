export function Stats({ items }) {
  const numItems = items.length;
  if (!numItems) return (<footer className="stats">
    <em>There are no
      Items on your list. Start Packing 🚀</em>
  </footer>);
  const packed = items.filter(item => item.packed).length;
  const percentage = Math.round((packed / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        💼 You have {numItems} items on your list, and you have already packed {packed} ({percentage}%)
      </em>
    </footer>
  );
}
