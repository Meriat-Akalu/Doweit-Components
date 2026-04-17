import LogItem from "./LogItem";

export default function LogList({ logs }) {
  return logs.map((log, i) => <LogItem key={i} log={log} />);
}