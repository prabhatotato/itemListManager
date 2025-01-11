import React, { useState } from "react";
import Logo from "./assets/hck.png";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-gray-800 py-3 flex items-center justify-center shadow-md">
        <div className="flex items-center space-x-2">
        <div className="h-8 w-8 flex items-center justify-center rounded">
        <img src={Logo} alt="hck" className="h-full w-full object-contain" />
        </div>
          <h1 className="text-green-500 text-lg font-bold">Item List Manager</h1>
        </div>
      </header>

      {/* Main Card */}
      <div className="bg-white mt-10 p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-gray-800 text-xl font-semibold mb-4">Item List</h2>

        {/* Input and Button */}
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold shadow-md transition"
            onClick={handleAddItem}
          >
            Add Item
          </button>
        </div>

        {/* List */}
        <ul className="mt-6 space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="bg-gray-200 px-4 py-2 rounded-md text-gray-800 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
