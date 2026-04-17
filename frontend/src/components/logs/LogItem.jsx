import LogCard from "./LogCard";

export default function LogItem({ log }) {
  return (
    <LogCard>
      <p>{log.text}</p>
      <small>{log.date}</small>
    </LogCard>
  );
}