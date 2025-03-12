export default function Button({ onClick, children }) {
  function handleClick() {
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-lg text-white font-semibold bg-blue-900 border-2 border-black cursor-pointer"
    >
      {children}
    </button>
  );
}
