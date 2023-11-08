import { Container } from 'semantic-ui-react';
import { useAppSelector } from '../../hooks/redux';
import Message from '../Message/Message';

function Messages() {
  const messages = useAppSelector((state) => state.chat.messages);
  return (
    <Container>
      {messages.map((message, index) => (
        <Message
          key={message.id}
          message={message}
          type={index % 2 === 0 ? 'ping' : 'pong'}
        />
      ))}
    </Container>
  );
}

export default Messages;
