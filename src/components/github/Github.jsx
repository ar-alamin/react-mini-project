import { useState, useEffect } from "react";

const Github = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ar-alamin")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 p-4 bg-gray-600 text-white text-3xl">
      <div className="flex items-center justify-evenly px-16">
        <img src={data.avatar_url} alt={data.name} className="rounded-md" />

        <div>
          <h4>Name: {data.name}</h4>
          <h5>username: {data.login}</h5>
          <p>Bio: {data.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Github;
