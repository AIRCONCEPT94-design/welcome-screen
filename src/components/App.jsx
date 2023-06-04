import React, { useState } from "react";

function App() {
  const [HeadingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMousedOver] = useState(false);

  function handleClick() {
    setHeadingText("Submit");
  }
  function mouseOver() {
    setMousedOver(true);
  }
  function Mouseout() {
    setMousedOver(false);
  }

  return (
    <div className="container">
      <h1>{HeadingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={mouseOver}
        onMouseOut={Mouseout}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
