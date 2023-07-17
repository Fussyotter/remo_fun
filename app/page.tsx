'use client'
import { useState, useEffect } from 'react';
import { useChat } from 'ai/react'
import EvaluationGuide from './evalGuide/page'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  const [prompt, setPrompt] = useState('');
  const [responseA, setResponseA] = useState('');
  const [responseB, setResponseB] = useState('');

  useEffect(() => {
    const newInput = `Prompt: ${prompt}\nResponse A: ${responseA}\nResponse B: ${responseB}`;
    const fakeEvent = new Event('input', { bubbles: true });
    Object.defineProperty(fakeEvent, 'target', { value: { value: newInput }, writable: true });
    handleInputChange(fakeEvent);
  }, [prompt, responseA, responseB]);

  return (
    <>
      {/* <EvaluationGuide /> */}
      <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
        {messages.map(m => (
          <div key={m.id}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
 
        <form onSubmit={handleSubmit}>
          <label>
            Prompt:
            <input
              className="w-full border border-gray-300 rounded mb-8 shadow-xl p-2"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </label>
          <label>
            Response A:
            <input
              className="w-full border border-gray-300 rounded mb-8 shadow-xl p-2"
              value={responseA}
              onChange={(e) => setResponseA(e.target.value)}
            />
          </label>
          <label>
            Response B:
            <input
              className="w-full border border-gray-300 rounded mb-8 shadow-xl p-2"
              value={responseB}
              onChange={(e) => setResponseB(e.target.value)}
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  )
}
