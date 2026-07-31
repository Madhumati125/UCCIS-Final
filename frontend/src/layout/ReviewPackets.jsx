import CanonicalPlatform from "../layout/CanonicalPlatform";

function ReviewPackets() {
  const packets = [
    "MASTER_REVIEW_PACKET.md",
    "DEPLOYMENT_PACKET.md",
    "RUNTIME_CHAIN_PROOF.md",
    "TRACE_PROPAGATION_PROOF.md",
    "REPLAY_RECONSTRUCTION_PROOF.md",
    "RUNTIME_EVIDENCE_PROOF.md"
  ];

  return (
    <CanonicalPlatform>
      <div className="page-container">
        <div className="card">
          <h2>Review Packets</h2>

          <table
            style={{
              width: "100%",
              marginTop: "20px"
            }}
          >
            <thead>
              <tr>
                <th>
                  Document
                </th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {packets.map(
                (packet) => (
                  <tr key={packet}>
                    <td>
                      {packet}
                    </td>

                    <td>
                      APPROVED
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </CanonicalPlatform>
  );
}

export default ReviewPackets;