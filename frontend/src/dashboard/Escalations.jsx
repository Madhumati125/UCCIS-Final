import { useState } from "react";

const Escalations = () => {
  const [data] = useState([
    { id: 1, level: "LEVEL 1" },
    { id: 2, level: "LEVEL 2" },
    { id: 3, level: "LEVEL 3" }
  ]);

  return (
    <div className="card">
      <h2>Escalations</h2>

      {data.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>{item.level}</p>
          <hr />
        </div>
      ))}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Escalations;