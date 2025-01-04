'use client';

import { useState, useEffect } from "react";
import VirtualKeyboard from "./components/VirtualKeyboard";

export default function Home() {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      let key = e.key.toLowerCase();
      
      // Map special keys
      if (e.code === 'ShiftLeft') key = 'leftshift';
      if (e.code === 'ShiftRight') key = 'rightshift';
      if (e.code === 'ControlLeft') key = 'leftctrl';
      if (e.code === 'ControlRight') key = 'rightctrl';
      if (e.code === 'AltRight') key = 'altgr';
      if (e.key === ' ') key = 'space';

      setPressedKeys((prev) => {
        if (!prev.includes(key)) {
          return [...prev, key];
        }
        return prev;
      });
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      let key = e.key.toLowerCase();
      
      // Map special keys
      if (e.code === 'ShiftLeft') key = 'leftshift';
      if (e.code === 'ShiftRight') key = 'rightshift';
      if (e.code === 'ControlLeft') key = 'leftctrl';
      if (e.code === 'ControlRight') key = 'rightctrl';
      if (e.code === 'AltRight') key = 'altgr';
      if (e.key === ' ') key = 'space';

      setPressedKeys((prev) => prev.filter((k) => k !== key));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const resetKeys = () => {
    setPressedKeys([]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Interactive Keyboard</h1>
        <p className="text-gray-400 text-center mb-8">Press any key to see it highlighted on the virtual keyboard</p>
        
        <VirtualKeyboard pressedKeys={pressedKeys} />

        <div className="flex justify-center mt-8">
          <button
            className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-200 transform hover:scale-105"
            onClick={resetKeys}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

