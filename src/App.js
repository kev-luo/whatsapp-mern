import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Pusher from 'pusher-js';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const pusher = new Pusher('737fbac157154505f9c2', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages'); // messages comes from pusher.trigger in server.js
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
