import CanonicalPlatform from "../layout/CanonicalPlatform";
import IncidentPanel from "../components/IncidentPanel";
import IncidentChart from "../components/IncidentChart";
import IncidentTableTask34 from "../components/IncidentTableTask34";

function Incidents() {
  return (
    <CanonicalPlatform>
      <div className="page-container">

        <IncidentPanel />

        <IncidentChart />

        <IncidentTableTask34 />

      </div>
    </CanonicalPlatform>
  );
}

export default Incidents;