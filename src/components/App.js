import React, { useState, useEffect } from "react";

const App = () => {
  const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null };
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [userText, setUserText] = useState("");
  const [snippet, setSnippet] = useState("Snippet");

  const SNIPPETS = [
    "Where do programmers like to hangout? The Foo Bar",
    "In order to understand recursion you must first understand recursion."
  ];

  const updateUserText = event => {
    setUserText(event.target.value);

    if (event.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime
      });
    }
  };

  const chooseSnippet = snippetIndex => () => {
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({ ...gameState, startTime: new Date().getTime() });
    setUserText("");
    setGameState(INITIAL_GAME_STATE);
  };

  const mapSnippet = () =>
    SNIPPETS.map((SNIPPET, index) => (
      <button onClick={chooseSnippet(index)} key={index}>
        {SNIPPET.substring(0, 30)}...
      </button>
    ));

  useEffect(() => {
    if (gameState.victory) document.title = "Victory!";
  });
  return (
    <div>
      <div className="container">
        <h2>Programmer Race</h2>
        <hr />
        <h3>{snippet}</h3>
        <h4>
          {gameState.victory ? `Done! Time: ${gameState.endTime}ms` : null}{" "}
        </h4>
        <input value={userText} onChange={updateUserText} />
        <hr />
        {mapSnippet()}
      </div>
    </div>
  );
};

export default App;
