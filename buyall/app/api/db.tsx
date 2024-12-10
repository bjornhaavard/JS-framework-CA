import React, { useEffect } from "react";

const db = () => {
  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <div>test</div>;
};

export default db;
