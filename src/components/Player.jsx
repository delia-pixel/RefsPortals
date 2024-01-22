import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const name = useRef();
  const [playerName, setPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // const handleChange = (event) => {
  //   setSubmitted(false);
  //   setPlayerName(event.target.value);
  // };
  const handleSubmit = () => {
    setPlayerName(name.current.value);
    name.current.value = null;
    // setSubmitted(true);
  };
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"} </h2>
      <p>
        <input ref={name} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
