import { useState } from "react";
import "./boxshadow.css";

const BoxShadow = () => {
  const [horigental, setHorigental] = useState(10);
  const [vertical, setVertical] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState("black");

  return (
    <div className="app">
      <div className="controls">
        <label>Horigental Length</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={horigental}
          onChange={(e) => setHorigental(e.target.value)}
        />

        <label>Vertical Length</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={vertical}
          onChange={(e) => setVertical(e.target.value)}
        />

        <label>Blur Length</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
        />

        <label>Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div className="display">
        <div
          className="box"
          style={{
            boxShadow: `${horigental}px ${vertical}px ${blur}px ${color}`,
          }}
        >
          <p>
            box-shadow: {horigental}px {vertical}px {blur}px {color}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoxShadow;
