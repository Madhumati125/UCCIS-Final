import { useEffect, useState } from "react";

import {
  getRuntimeSummary,
  getTraceIds,
  getHealth,
  getReplayData
} from "../services/runtimeService";

function useRuntimeData() {

  const [summary, setSummary] = useState(null);
  const [signals, setSignals] = useState([]);
  const [health, setHealth] = useState(null);
  const [replay, setReplay] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {

    setLoading(true);

    try {

      const [
        summaryResult,
        signalResult,
        healthResult,
        replayResult
      ] = await Promise.allSettled([
        getRuntimeSummary(),
        getTraceIds(),
        getHealth(),
        getReplayData()
      ]);

      // Runtime Summary
      if (summaryResult.status === "fulfilled") {
        setSummary(summaryResult.value.summary || null);
      } else {
        console.error(
          "Runtime Summary Error:",
          summaryResult.reason
        );
        setSummary(null);
      }

      // Trace IDs
      if (signalResult.status === "fulfilled") {
        setSignals(signalResult.value.data || []);
      } else {
        console.error(
          "Trace IDs Error:",
          signalResult.reason
        );
        setSignals([]);
      }

      // Health
      if (healthResult.status === "fulfilled") {
        setHealth(healthResult.value);
      } else {
        console.error(
          "Health Error:",
          healthResult.reason
        );
        setHealth(null);
      }

      // Replay
      if (replayResult.status === "fulfilled") {
        setReplay(replayResult.value.data || []);
      } else {
        console.error(
          "Replay Error:",
          replayResult.reason
        );
        setReplay([]);
      }

    } catch (error) {

      console.error(
        "Unexpected Runtime Hook Error:",
        error
      );

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadData();

    // const timer = setInterval(loadData, 10000);

    // return () => clearInterval(timer);

  }, []);

  return {
    summary,
    signals,
    replay,
    health,
    loading
  };

}

export default useRuntimeData;