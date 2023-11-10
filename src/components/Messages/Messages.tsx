import { useEffect, useRef } from 'react';
import { Container } from 'semantic-ui-react';
import { useAppSelector } from '../../hooks/redux';
import Message from '../Message/Message';

function Messages() {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const messages = useAppSelector((state) => state.chat.messages);

  // Scroll into the messagesEndRef each time a new message is added
  useEffect(() => {
    console.log('new message added');

    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <Container>
      {messages.map((message, index) => (
        <Message
          key={message.id}
          message={message}
          type={index % 2 === 0 ? 'ping' : 'pong'}
        />
      ))}

      <div ref={messagesEndRef} />
    </Container>
  );
}

export default Messages;
