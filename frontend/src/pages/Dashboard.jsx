import { useState } from "react";
import useLogs from "../hooks/useLogs";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";

import TabNavigation from "../components/tabs/TabNavigation";

import ProgressTab from "../components/features/ProgressTab";
import IdeationTab from "../components/features/IdeationTab";
import ComponentTab from "../components/features/ComponentTab";

export default function Dashboard() {
  const [tab, setTab] = useState("progress");
  const { logs, addLog } = useLogs();

  return (
    <Container>
      <Header />

      <TabNavigation setTab={setTab} />

      {tab === "progress" && (
        <ProgressTab logs={logs.progress} addLog={addLog} />
      )}

      {tab === "ideation" && (
        <IdeationTab logs={logs.ideation} addLog={addLog} />
      )}

      {tab === "component" && (
        <ComponentTab logs={logs.component} addLog={addLog} />
      )}

      <Footer />
    </Container>
  );
}