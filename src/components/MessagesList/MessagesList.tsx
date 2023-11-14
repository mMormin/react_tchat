import { useEffect, useRef, useState } from 'react';
import { Button, Image } from 'semantic-ui-react';
import { selectMessages } from '../../store/reducers/chat';
import {
  subscribeToNewMessages,
  unsubscribeToNewMessages,
} from '../../socket/chat';
import { useAppSelector } from '../../hooks/redux';
import Message from '../Message/Message';
import './MessagesList.scss';

function MessagesList() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesListRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(false);

  const messages = useAppSelector(selectMessages);

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
    subscribeToNewMessages();
    return () => {
      unsubscribeToNewMessages();
    };
  }, []);

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
        <h1 className="messages-header__title">
          Conversation de l&#39;amitier
        </h1>
      </div>

      <div className="messages-list" ref={messagesListRef}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}

        <div ref={messagesEndRef} />

        {showArrow && (
          <Button
            className="button--down"
            circular
            size="large"
            icon="angle down"
            color="black"
            toggle
            onClick={handleGoBottom}
          />
        )}
      </div>
    </div>
  );
}

export default MessagesList;
