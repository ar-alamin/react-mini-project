import { useState } from "react";
import "../App.css";

const BackgroundChanger = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <div className="container">
        <div className="allColor">
          <button
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            red
          </button>

          <button
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            green
          </button>

          <button
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>

          <button
            onClick={() => setColor("olive")}
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>

          <button
            onClick={() => setColor("purple")}
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>

          <button
            onClick={() => setColor("tomato")}
            style={{ backgroundColor: "tomato" }}
          >
            tomato
          </button>

          <button
            onClick={() => setColor("seagreen")}
            style={{ backgroundColor: "seagreen" }}
          >
            seagreen
          </button>

          <button
            onClick={() => setColor("teal")}
            style={{ backgroundColor: "teal" }}
          >
            teal
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundChanger;
