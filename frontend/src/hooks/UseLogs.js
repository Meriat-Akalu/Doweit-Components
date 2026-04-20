import { useState } from "react";

export default function useLogs() {
  const [logs, setLogs] = useState({
    progress: [],
    ideation: [],
    component: [],
  });

  const addLog = (type, text) => {
    if (!text) return;

    const newLog = {
      text,
      date: new Date().toLocaleString(),
    };

    setLogs((prev) => ({
      ...prev,
      [type]: [...prev[type], newLog],
    }));
  };

  return { logs, addLog };
}