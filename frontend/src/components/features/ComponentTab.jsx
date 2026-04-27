import LogInput from "../logs/LogInput";
import LogList from "../logs/LogList";

export default function ComponentTab({ logs, addLog }) {
  return (
    <>
      <LogInput onAdd={(t) => addLog("component", t)} />
      <LogList logs={logs} />
    </>
  );
}