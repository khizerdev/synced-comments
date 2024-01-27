import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './index.css';
const socket = io.connect('http://localhost:3001');

function App() {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((current) => {
        console.log([...current, data.message]);
        return [...current, data.message];
      });
    });
  }, [socket]);

  const sendMessage = () => {
    socket.emit('send_message', {
      message: msg,
    });
    setMsg('');
  };

  return (
    <section className="flex flex-col max-w-[75%] justify-center mx-auto mt-5">
      <div className="flex flex-col gap-4">
        <input
          className="border mr-4 w-full h-8"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="bg-slate-600 text-white p-4 rounded" onClick={sendMessage}>
          Send
        </button>
      </div>
      <div className="flex flex-col gap-4  mt-5">
        <h1 className="text-3xl">Chat</h1>
        <div className="flex flex-col">
          {messages.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
