export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start Adding some items to your packing List 🚀</em>
      </p>
    );

  const numbItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercent = Math.round((numPacked / numbItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPercent === 100
          ? "You are Ready to go ✈️"
          : `💼 You have ${numbItems} items on your list, and you already packed 
        ${numPacked} (${numPercent}%)`}
      </em>
    </footer>
  );
}
