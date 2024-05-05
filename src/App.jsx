import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  // State to hold the input question
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("")

  // Function to update question state with input value
  const getQuestion = (e) => {
    setQuestion(e.target.value);
  }

  // Function to generate answer
  const generateAnswer = async () => {
    setAnswer("Loading.....")
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyACWUSub5eq9eDCJiMUimzadJieKaquTl0",
        {
          contents: [{
            parts: [{ text: question }]
          }]
        }
      )
      setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
      
    } catch (error) {
      console.error("data featching error", error)
      
    }
  }

  return (
    <>
    <nav>
      <div>
        {/* navbar-logo */}
        <div>
          <h1>chat-AI</h1>
        </div>
        <div></div>
      </div>
    </nav>

    <div>
      {/* input-field */}
      <div>
        <input type="text" value={question} onChange={getQuestion} placeholder='Enter your question' />
      </div>
      {/* input-button */}
      <div>
        <button onClick={generateAnswer}>Generate Answer</button>
      </div>

      {/* answer-section */}

      <div>
        <pre>{answer}</pre>
      </div>
    </div>
    </>
  );
}

export default App;
