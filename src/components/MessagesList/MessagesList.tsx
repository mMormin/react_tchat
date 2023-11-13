import { useEffect, useRef, useState } from 'react';
import { Image } from 'semantic-ui-react';
import { useAppSelector } from '../../hooks/redux';
import Message from '../Message/Message';
import GoDownButton from '../GoDownButton/GoDownButton';
import './MessagesList.scss';

function MessagesList() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesListRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(false);

  const messages = useAppSelector((state) => state.chat.messages);

  const handleGoBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  const isAtBottom = () => {
    const messagesList = messagesListRef.current;

    return (
      messagesList != null &&
      messagesList.scrollTop + messagesList.clientHeight ===
        messagesList.scrollHeight
    );
  };

  useEffect(() => {
    handleGoBottom();

    const messagesList = messagesListRef.current;

    const handleScroll = () => {
      setShowArrow(!isAtBottom());
    };

    messagesList?.addEventListener('scroll', handleScroll);

    return () => {
      messagesList?.removeEventListener('scroll', handleScroll);
    };
  }, [messages]);

  return (
    <div className="container-messages">
      <div className="messages-header">
        <Image
          className="messages-header__image"
          src="https://i.pravatar.cc/300"
          avatar
        />
        <h1 className="messages-header__title">Bernard Dupond</h1>
      </div>
      <div className="messages-list" ref={messagesListRef}>
        {messages.map((message, index) => (
          <Message
            key={message.id}
            message={message}
            type={index % 2 === 0 ? 'ping' : 'pong'}
          />
        ))}

        <div ref={messagesEndRef} />
        {showArrow && <GoDownButton onClick={handleGoBottom} />}
      </div>
    </div>
  );
}

export default MessagesList;
