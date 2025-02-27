import "./Button.scss";

export default function Button({ onClick, children }) {
  return <button className="raise mt-10">{children}</button>;
}
