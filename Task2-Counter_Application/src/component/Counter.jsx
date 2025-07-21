import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="h-screen flex items-center justify-center bg-[#dff9fb] font-sans">
      <div className="h-[60vh] w-[360px] bg-white rounded-lg shadow-xl flex flex-col items-center justify-center px-6">
        <h1 className="w-full text-center text-5xl font-bold bg-[navy] py-4 text-white rounded-t-lg">
          {count}
        </h1>

        <div className="flex gap-6 pt-8">
          <button 
            onClick={increment}
            className="bg-[navy] text-white px-4 py-2 rounded-lg font-semibold transition hover:bg-[blue] hover:scale-105"
          >
            Increment
          </button>
          <button 
            onClick={decrement}
            className="bg-[navy] text-white px-4 py-2 rounded-lg font-semibold transition hover:bg-[blue] hover:scale-105"
          >
            Decrement
          </button>
        </div>

        <button 
          onClick={reset}
          className="mt-6 bg-[navy] text-white px-4 py-2 rounded-lg font-semibold transition hover:bg-[blue] hover:scale-105"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
