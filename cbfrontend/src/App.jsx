import { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [messages, setMessages] = useState([{ text: "Send a TEXT/QUESTION in the input box", role: 'bot' }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');                                            
    setIsTyping(true);                                       

    try {
    const res = await axios.post('http://localhost:8000/chat', { 
    message: currentInput 
    });                                                     
    setMessages(prev => [...prev, { 
      role: 'bot', 
      text: res.data.response 
      }]);
    }
    finally {
      setIsTyping(false);                                     
    }
  };

  return (
    <div className="app-container">
      <div className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className={`message-wrapper ${m.role}`}>
          <div className="bubble">{m.text}</div>
        </div>
      ))}
        
        {isTyping && (
          <div className="typing">Gemini is thinking...</div> )}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
export default App;