import React, { useState, useEffect } from "react";

function TweetList({ tweets, setTweets }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch user's tweets from backend
    const fetchTweets = async () => {
      setIsLoading(true);
      const response = await fetch("/api/tweets");
      const data = await response.json();
      setTweets(data.tweets);
      setIsLoading(false);
    };
    fetchTweets();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading tweets...</p>
      ) : (
        <ul>
          {tweets.map((tweet) => (
            <li key={tweet.id}>{tweet.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TweetList;
