import React from 'react';

const keyboardLayout = [
  ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
  ['LeftShift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'RightShift'],
  ['LeftCtrl', 'Win', 'Alt', 'Space', 'AltGr', 'Fn', 'Menu', 'RightCtrl']
];

interface VirtualKeyboardProps {
  pressedKeys: string[];
}

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({ pressedKeys }) => {
  return (
    <div className="grid gap-1.5 p-3 bg-gray-900 rounded-xl shadow-lg">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1.5">
          {row.map((key) => {
            const displayKey = key === 'Space' ? ' ' : key;
            const isPressed = pressedKeys.includes(key.toLowerCase());
            const isWideKey = ['Backspace', 'Tab', 'CapsLock', 'Enter', 'LeftShift', 'RightShift', 'LeftCtrl', 'RightCtrl'].includes(key);
            const isSpaceKey = key === 'Space';
            
            return (
              <div
                key={key}
                className={`
                  flex items-center justify-center
                  ${isSpaceKey ? 'col-span-5 w-full' : isWideKey ? 'w-auto px-3' : 'w-10 sm:w-12'}
                  ${isPressed ? 'bg-white text-gray-900' : 'bg-gray-800 text-gray-300'}
                  h-10 sm:h-12 rounded-lg text-xs sm:text-sm font-medium shadow-md transition-all duration-150
                  hover:bg-gray-700 hover:text-white
                  ${isPressed ? 'transform scale-95' : ''}
                `}
              >
                {displayKey}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default VirtualKeyboard;

