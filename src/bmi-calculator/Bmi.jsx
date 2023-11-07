import { useState } from "react";
import "./Bmi.css";

const Bmi = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calBmi = (e) => {
    e.preventDefault();

    if (height === "" || height < 0 || isNaN(height)) {
      alert("Please give a valid height");
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
      alert("Please give a valid weight");
    } else {
      let bmi = weight / ((height * height) / 10000);

      setBmi(bmi.toFixed(2));
    }

    // show message
    if (bmi < 18.5) {
      setMessage(`Under weight`);
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage(`Normal Range`);
    } else {
      setMessage(`Overweight`);
    }
  };

  const relode = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>

        <form onSubmit={calBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (cm)</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={relode}>
              Relode
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
