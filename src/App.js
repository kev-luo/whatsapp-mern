import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Pusher from 'pusher-js';
import React, { useEffect, useState } from 'react';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
      .then(res => {
        setMessages(res.data);
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('737fbac157154505f9c2', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages'); // messages comes from pusher.trigger in server.js
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={ messages }/>
      </div>
    </div>
  );
}

export default App;
