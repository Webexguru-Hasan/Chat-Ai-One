import React, { useState } from 'react'
import './styles.css'
import axios from 'axios'

const App = () => {

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setIsLoading] = useState(false)

  const generateData = async () => {

    setIsLoading(true)

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyACWUSub5eq9eDCJiMUimzadJieKaquTl0",
        {
          contents: [{
            parts: [{ text: question }]
          }]
        }
      )

      setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"])
    } catch (error) {
      console.error("fetch data error", error)
    } finally{
      setIsLoading(false)
    }

    
  }

  const getAnswer = (e) =>{
    setQuestion(e.target.value)

  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      generateData();
    }
  }

  
  return (
    <>
    <div className='navbar'>
      <div className='nav-body'>
        <h1>chat AI</h1>
      </div>
    </div>

    <div className='chat-body'>
      {/* input-field-here */}
      <div>
        <input className='chat-field' type="text" placeholder='Enter your question' value={question} onChange={getAnswer} onKeyPress={handleKeyPress} />
        <button onClick={generateData} className='chat-btn'>generate answer</button>
      </div>
      {/* input-button-here */}
      {/* <div>
        
      </div> */}
      {/* answer-showing-field */}

    </div>
    {loading ? <div className='loading'><h1>Loading....</h1></div> : (!answer ? null : <div className='answer-field'>
        <pre>{answer}</pre>
      </div>)}
    </>
  )
}

export default App