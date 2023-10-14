import React, { useState } from 'react';
import './style.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);
  const [containerColor, setContainerColor] = useState('#c0b6db');

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
    setContainerColor(color);
  };
  
  return (
    <div className="background">
      <h1>Color Picker</h1>
      <div className="color-picker" style={{ backgroundColor: containerColor, margin: '0 10em 10em 10em' }}>
        {showColorList && (
          <ul className="color-list">
            {colors.map((color, index) => (
              <li key={index} onClick={() => handleColorClick(color)} style={{ backgroundColor: color }}>
                {selectedColor === color ? '' : ''}
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => setShowColorList(!showColorList)}>Pick a color</button>
      </div>
    </div>
  );
};

export default ColorPicker;
