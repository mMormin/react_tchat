import { useEffect, useRef } from 'react';
import { Image } from 'semantic-ui-react';
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
    <div className="container-messages">
      <div className="messages-wrapper">
        <Image
          className="messages-wrapper__image"
          src="https://i.pravatar.cc/300"
          avatar
        />
        <h1 className="messages-wrapper__title">Bernard Dupond</h1>
      </div>
      <div className="messages-list">
        {messages.map((message, index) => (
          <Message
            key={message.id}
            message={message}
            type={index % 2 === 0 ? 'ping' : 'pong'}
          />
        ))}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default MessagesList;
