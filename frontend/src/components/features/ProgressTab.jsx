import LogInput from "../logs/LogInput";
import LogList from "../logs/LogList";

export default function ProgressTab({ logs, addLog }) {
  return (
    <>
      <LogInput onAdd={(t) => addLog("progress", t)} />
      <LogList logs={logs} />
    </>
  );
}