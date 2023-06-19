import React, { useState, useEffect } from "react";

function App() {
  const [dogImg, setDogImg] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImg(data.message);
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE

  if (!dogImg) return <p>Loading...</p>;

  return <img src={dogImg} alt="A Random Dog" />;
}

export default App;
