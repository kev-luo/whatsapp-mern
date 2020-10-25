import './ChatMessage.css';

function ChatMessageSender() {
  return (
    <p className="chat_message">
      <span className="chat_name">Kevin</span>
      This is a message
      <span className="chat_timeStamp">{ new Date().toUTCString() }</span>
    </p>
  )
}

export default ChatMessageSender;
