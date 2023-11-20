import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    list.push(item);
    setList([...list]);
  };

  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div>
      <div className="container">
        <input
          className="input-box"
          onChange={(e) => setItem(e.target.value)}
          type="text"
          placeholder="item added...."
        />

        <button className="btn" onClick={addItem}>
          ADD
        </button>
      </div>

      <div className="display">
        <table>
          <tbody>
            {list.length !== 0 ? (
              list.map((element, index) => {
                return (
                  <tr>
                    <td>{element}</td>
                    <td>
                      <button onClick={() => removeItem(index)}>❌</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
