import './ChatMessage.css';

function ChatMessage({ messages }) {

  const displayMessages = messages.map(message => {
    return (
      <p className={`chat_message ${message.received && "chat_receiver"}`}>
        <span className="chat_name">{message.name}</span>
        {message.message}
        <span className="chat_timeStamp">{ message.timeStamp }</span>
      </p>
    )
  })

  return (
    <div>
      { displayMessages }
    </div>
  )
}

export default ChatMessage;
