export default function Button({ onClick, children }) {
  function handleClick() {
    onClick();
  }

  return (
    <button onClick={handleClick} className="p-4 rounded-lg border-gray-500">
      {children}
    </button>
  );
}
