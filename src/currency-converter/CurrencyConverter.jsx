import { useEffect, useState } from "react";
import "./currency.css";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("EUR");
  const [isLoading, setIsLoading] = useState(false);
  const [converted, setConverted] = useState("");

  useEffect(() => {
    const convert = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurr}&to=${toCurr}`
      );
      const data = await res.json();
      //   console.log(data);
      setConverted(data.rates[toCurr]);
      setIsLoading(false);
    };

    if (toCurr === fromCurr) {
      return setConverted(amount);
    }

    convert();
  }, [amount, fromCurr, toCurr]);

  return (
    <div className="container">
      <h2>Currency Converter</h2>

      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={isLoading}
      />

      <select
        value={fromCurr}
        onChange={(e) => setFromCurr(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
      </select>

      <select
        value={toCurr}
        onChange={(e) => setToCurr(e.target.value)}
        disabled={isLoading}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>
        {converted} {toCurr}
      </p>
    </div>
  );
};

export default CurrencyConverter;
