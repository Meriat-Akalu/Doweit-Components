import LogInput from "../logs/LogInput";
import LogList from "../logs/LogList";

export default function IdeationTab({ logs, addLog }) {
  return (
    <>
      <LogInput onAdd={(t) => addLog("ideation", t)} />
      <LogList logs={logs} />
    </>
  );
}