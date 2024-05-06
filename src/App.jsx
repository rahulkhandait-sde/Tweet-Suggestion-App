import React, { useState } from "react";
import TweetList from "./TweetList";
import TweetInput from "./TweetInput";
import TweetSuggestion from "./TweetSuggestion";

function App() {
  const [tweets, setTweets] = useState([]);
  const [suggestion, setSuggestion] = useState(null);

  const handleSuggest = (prompt) => {
    // Send prompt to backend for AI processing and suggestion generation
    fetch("/api/suggest-tweet", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    })
      .then((response) => response.json())
      .then((data) => setSuggestion(data.suggestion));
  };

  return (
    <div>
      <h1>Tweet Suggestion App</h1>
      <TweetList tweets={tweets} setTweets={setTweets} />
      <TweetInput onSuggest={handleSuggest} />
      {suggestion && <TweetSuggestion suggestion={suggestion} />}
    </div>
  );
}

export default App;
