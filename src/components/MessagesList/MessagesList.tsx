import { useEffect, useRef } from 'react';
import { useAppSelector } from '../../hooks/redux';
import Message from '../Message/Message';
import './MessagesList.scss';

function MessagesList() {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const messages = useAppSelector((state) => state.chat.messages);

  // Scroll into the messagesEndRef each time a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="container-list">
      {messages.map((message, index) => (
        <Message
          key={message.id}
          message={message}
          type={index % 2 === 0 ? 'ping' : 'pong'}
        />
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessagesList;
