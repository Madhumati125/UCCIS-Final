import React from "react";

const data = [
  {
    zone: "South Mumbai",
    score: 55,
    trend: "Stable",
    confidence: "72%"
  },
  {
    zone: "Bandra",
    score: 28,
    trend: "Falling",
    confidence: "68%"
  }
];

function IntelligenceTable() {

  return (

    <div className="table-container">

      <h2>
        Intelligence Summary
      </h2>

      <table>

        <thead>

          <tr>

            <th>Zone</th>
            <th>Score</th>
            <th>Trend</th>
            <th>Confidence</th>

          </tr>

        </thead>

        <tbody>

          {
            data.map((item, index) => (

              <tr key={index}>

                <td>{item.zone}</td>
                <td>{item.score}</td>
                <td>{item.trend}</td>
                <td>{item.confidence}</td>

              </tr>
            ))
          }

        </tbody>

      </table>

    </div>
  );
}

export default IntelligenceTable;