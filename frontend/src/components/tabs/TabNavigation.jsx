import TabButton from "./TabButton";

export default function TabNavigation({ setTab }) {
  return (
    <div>
      <TabButton label="Progress" onClick={() => setTab("progress")} />
      <TabButton label="Ideation" onClick={() => setTab("ideation")} />
      <TabButton label="Component" onClick={() => setTab("component")} />
    </div>
  );
}