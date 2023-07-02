import './App.css'
import '../tailwind.config.js'
import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const sendEmail = async () => {
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: email,
        subject,
        text: message,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setResponseMessage(data.message);
    } else {
      console.log('Failed to send email');
      setResponseMessage('Failed to send email');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Email App</h1>
      <input
        type="email"
        placeholder="Recipient Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="p-2 mb-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 mb-2 border border-gray-300 rounded"
      ></textarea>
      <button
        onClick={sendEmail}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Send Email
      </button>
      {responseMessage && (
        <p className="text-center mt-4">{responseMessage}</p>
      )}
    </div>
  );
}

export default App;



