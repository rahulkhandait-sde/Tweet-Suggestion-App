import React from "react";

function TweetSuggestion({ suggestion }) {
  return (
    <div>
      <p>Suggested Tweet:</p>
      <p>{suggestion}</p>
    </div>
  );
}

export default TweetSuggestion;
