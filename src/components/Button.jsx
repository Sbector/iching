export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-button-bg text-button-text hover:bg-button-hover active:shadow-sm shadow-md transition-all rounded-md m-3 px-2 py-2"
    >
      {children}
    </button>
  );
}
