import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setSubmitted(false);
    setPlayerName(event.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };
  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "unknown entity"} </h2>
      <p>
        <input type="text" value={playerName} onChange={handleChange} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
