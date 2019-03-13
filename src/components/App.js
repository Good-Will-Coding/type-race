import React, { useState } from "react";

const App = () => {
  const [userText, setUserText] = useState("");

  const updateUserText = event => {
    setUserText(event.target.value);
    console.log("current userText", userText);
  };
  return (
    <div>
      <h2>Type Race</h2>
      <input onChange={updateUserText} />
    </div>
  );
};

export default App;
