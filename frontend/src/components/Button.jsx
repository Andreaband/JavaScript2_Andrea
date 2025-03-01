import React from "react";

function Button({ text }) {
  return (
    <button className="px-8 py-4 bg-red-700 text-white text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-red-800">
      {text}
    </button>
  );
}

export default Button;
