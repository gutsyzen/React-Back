import React, { useState, useEffect } from "react";

export default function Effect() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(result => setData(result));
  }, []); // Empty dependency array if you want the effect to run only once.

  return (
    <div>
      {data ? (
        <p>Data: {JSON.stringify(data)}</p>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}