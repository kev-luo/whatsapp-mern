import './ChatMessage.css';

function ChatMessageReceiver() {
  return (
    <p className="chat_message chat_receiver">
      <span className="chat_name">Kevin</span>
      This is a message
      <span className="chat_timeStamp">{ new Date().toUTCString() }</span>
    </p>
  )
}

export default ChatMessageReceiver;
