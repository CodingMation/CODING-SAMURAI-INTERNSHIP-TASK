import React, { useState } from "react";
import { FaTrash, FaPlus, FaEdit, FaCheck } from "react-icons/fa";

const ToDo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex].text = input;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, { text: input, completed: false }]);
    }

    setInput("");
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const editTodo = (index) => {
    setInput(todos[index].text);
    setEditIndex(index);
  };

  const deleteAll = () => {
    setTodos([]);
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">To-Do List</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add new todo"
            className="flex-1 p-2 border rounded-md focus:outline-none"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            {editIndex !== null ? <FaEdit /> : <FaPlus />}
          </button>
        </div>

        {todos.length > 0 && (
          <button
            onClick={deleteAll}
            className="text-sm text-red-600 hover:underline mb-2"
          >
            Delete All
          </button>
        )}

          <ul className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="bg-gray-100 px-4 py-2 rounded-md flex justify-between items-center shadow"
            >
              <span
                className={`flex-1 cursor-pointer font-semibold ${
                  todo.completed ? "line-through text-gray-500 font-normal text-sm" : ""
                }`}
                onClick={() => toggleComplete(index)}
              >
                {todo.text}
              </span>

              {todo.completed && (
                <FaCheck className="text-green-600 ml-2" />
              )}

              <div className="flex gap-2 ml-2">
                {!todo.completed && (
                  <button
                    onClick={() => editTodo(index)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                )}
                <button
                  onClick={() => deleteTodo(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;