import RuntimeCards from "../components/RuntimeCards";
import RuntimeLogsTask27 from "../components/RuntimeLogsTask27";
import RuntimeStatus from "../components/RuntimeStatus";
import RuntimeFlow from "../components/RuntimeFlow";
import SignalChart from "../components/SignalChart";
import IncidentChart from "../components/IncidentChart";

export default function RuntimeTask27() {
  return (
    <div className="runtime-page">

      <h1>UCCIS Runtime Monitoring Center</h1>

      <RuntimeCards />

      <div className="runtime-charts">
        <SignalChart />
        <IncidentChart />
      </div>

      <RuntimeStatus />

      <RuntimeFlow />

      <RuntimeLogsTask27 />

    </div>
  );
}