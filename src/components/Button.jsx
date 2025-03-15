function Button({ text, onClick, color = "blue", size = "md" }) {
    const sizeClass = size === "lg" ? "px-6 py-3 text-lg" : "px-4 py-2 text-md";
    const colorClass = color === "blue" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500 hover:bg-gray-600";
  
    return (
      <button
        onClick={onClick}
        className={`${sizeClass} ${colorClass} text-white font-bold rounded-lg`}
      >
        {text}
      </button>
    );
  }
  
  export default Button;  