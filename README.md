## Tweet Suggestion App

This project is a web application that uses AI to suggest creative and relevant tweets based on a user's prompt.

**Features:**

- Analyze user's past tweets to understand their writing style and preferred topics.
- Generate a tweet suggestion using a powerful AI model (currently supports both CopilotKit and ChatGPT API).
- Optionally save the prompt and suggested tweet for future analysis and model improvement.

**Technologies:**

- Frontend: ReactJS with Vite
- Backend: Node.js with Express
- AI Models: CopilotKit or ChatGPT

**Installation and Usage:**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/tweet-suggestion-app.git
   ```

2. **Install dependencies:**

   ```bash
   cd tweet-suggestion-app
   npm install
   ```

3. **Run the backend server:**

   ```bash
   cd backend
   node server.js
   ```

4. **Run the frontend development server:**

   ```bash
   cd frontend
   npm run dev
   ```

   This will start the development server, typically accessible at `http://localhost:3000`.

**Additional Notes:**

- Replace `YOUR_COPILOTKIT_API_KEY` or `YOUR_CHATGPT_API_KEY` in the `server.js` file with your actual API key.
- Consider adding a video demo showcasing the app's functionality for better understanding.

**Contributing:**

Feel free to contribute to this project by creating pull requests with improvements or additional features.

**License:**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

**Disclaimer:**

This project is for educational and research purposes only. The provided AI models have their own usage limitations and terms of service.
