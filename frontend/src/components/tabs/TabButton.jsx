import Button from "../ui/Button";

export default function TabButton({ label, onClick }) {
  return <Button onClick={onClick}>{label}</Button>;
}