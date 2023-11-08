import { Container } from 'semantic-ui-react';
import { TMessage } from '../../@types/message';
import Message from '../Message/Message';

type MessagesProps = {
  messages: TMessage[];
};

function Messages({ messages }: MessagesProps) {
  return (
    <Container>
      {/* {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))} */}
    </Container>
  );
}

export default Messages;
