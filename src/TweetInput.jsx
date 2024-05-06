import React, { useState } from "react";
import { CopilotTextarea } from "@copilotkit/react-ui";

function TweetInput({ onSuggest }) {
  const [prompt, setPrompt] = useState("");

  const handleSuggest = () => {
    onSuggest(prompt);
  };

  return (
    <div>
      <CopilotTextarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt..."
        features={["autocompletion", "textGeneration"]}
      />
      <button onClick={handleSuggest}>Suggest Tweet</button>
    </div>
  );
}

export default TweetInput;
