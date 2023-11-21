import { useState } from "react";

const TipsCalculator = () => {
  const [bill, setBill] = useState("");
  const [parcentage, setParcentage] = useState(0);
  const [member, setMember] = useState(1);

  const tip = ((bill * parcentage) / 100) * member;

  const handleReset = () => {
    setBill("");
    setParcentage(0);
    setMember(1);
  };

  return (
    <div>
      <label>How much was the bill?</label>
      <input
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        type="text"
        placeholder="0"
      />

      <label>How did you like the service?</label>
      <select
        value={parcentage}
        onChange={(e) => setParcentage(e.target.value)}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">Satisfied(5%)</option>
        <option value="10">Very Good Services(10%)</option>
      </select>

      <label>How many member in this resturant?</label>
      <select value={member} onChange={(e) => setMember(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      {bill > 0 && (
        <>
          <h3>
            Your pay ${bill + tip} (${bill} + ${tip}tip)
          </h3>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default TipsCalculator;
