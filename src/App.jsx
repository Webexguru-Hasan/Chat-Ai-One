import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  // State to hold the input question
  const [question, setQuestion] = useState("");

  // Function to update question state with input value
  const getQuestion = (e) => {
    setQuestion(e.target.value);
  }

  // Function to generate answer
  const generateAnswer = async () => {
    console.log("Loading.....")
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyACWUSub5eq9eDCJiMUimzadJieKaquTl0",
        {
          contents: [{
            parts: [{ text: question }]
          }]
        }
      )
      console.log(response);
      
    } catch (error) {
      console.error("data featching error", error)
      
    }
  }

  return (
    <div>
      <h1>Chat Ai</h1>
      {/* Input field for the question */}
      <input 
        type="text" 
        value={question} 
        onChange={getQuestion} 
        placeholder="Enter your question"
      />
      {/* Button to generate answer */}
      <button onClick={generateAnswer}>Generate</button>
    </div>
  );
}

export default App;
