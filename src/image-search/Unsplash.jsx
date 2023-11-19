import { useState } from "react";
import "./unsplash.css";

const Unsplash = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const fetchImg = async () => {
    const access_key = "ISxXNTvzSarE3kqw3qwE1mfzniXmr0ILH3RMbAPUvOA";
    const url = `https://api.unsplash.com/search/photos/?client_id=${access_key}&query=${value}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    setResults(data.results);
  };

  return (
    <div className="App">
      <div className="mydiv">
        <span>Search</span>

        <input
          className="input-box"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button className="btn" onClick={() => fetchImg()}>
          search
        </button>
      </div>

      <div className="gallery">
        {results.map((item) => {
          return (
            <img className="img-box" key={item.id} src={item.urls.regular} />
          );
        })}
      </div>
    </div>
  );
};

export default Unsplash;
