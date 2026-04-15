import { useState } from "react";

export default function LogInput({ onAdd }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => onAdd(input)}>Add</button>
    </div>
  );
}