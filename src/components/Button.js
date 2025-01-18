const Button = ({ text, onClick, type = "button" }) => (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary text-white py-2 px-6 rounded-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300 transition"
    >
      {text}
    </button>
  );
  export default Button;
  