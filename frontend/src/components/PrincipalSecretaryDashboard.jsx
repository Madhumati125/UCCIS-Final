// src/pages/PrincipalSecretaryDashboard.jsx

import React from "react";

import {
  secretaryAdapter
} from "../governance/adapters/secretaryAdapter";

import EscalationChainPanel
from "../components/governance/EscalationChainPanel";

import UnresolvedWorkflowPanel
from "../components/governance/UnresolvedWorkflowPanel";

import AgingIncidentPanel
from "../components/governance/AgingIncidentPanel";

import DependencyFailurePanel
from "../components/governance/DependencyFailurePanel";

import DelayedExecutionPanel
from "../components/governance/DelayedExecutionPanel";

import DistrictOperationalHealth
from "../components/governance/DistrictOperationalHealth";

import ReplaySummaryInspection
from "../components/governance/ReplaySummaryInspection";

import OperationalLineageSummary
from "../components/governance/OperationalLineageSummary";

export default function PrincipalSecretaryDashboard() {

  const data =
    secretaryAdapter();

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-4xl font-bold">
        Principal Secretary Operations Center
      </h1>

      <EscalationChainPanel
        chains={data.escalationChains}
      />

      <UnresolvedWorkflowPanel />

      <AgingIncidentPanel
        incidents={data.agingIncidents}
      />

      <DependencyFailurePanel />

      <DelayedExecutionPanel
        delays={data.delayedExecutions}
      />

      <DistrictOperationalHealth
        districts={data.operationalHealth}
      />

      <ReplaySummaryInspection />

      <OperationalLineageSummary />

    </div>
  );
}