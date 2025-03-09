import "./Button.scss";

export default function Button({ onClick, children }) {
  function handleClick() {
    onClick();
  }

  return (
    <button onClick={handleClick} className="raise mt-10">
      {children}
    </button>
  );
}
