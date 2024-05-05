import React from 'react'
import './App.css'
import axios from 'axios'

const App = () => {

  async function generateAnswer(){
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyACWUSub5eq9eDCJiMUimzadJieKaquTl0",
      method: "post",
      data: {"contents":[{"parts":[{"text":"Write a story about a magic backpack"}]}]}
    })

    console.log(response);
  }

  
  return (
    <>
    <div>
      <h1>Chat Ai</h1>
      <button onClick={generateAnswer}>Generate</button>
    </div>
    </>
  )
}

export default App