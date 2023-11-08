import { Segment } from 'semantic-ui-react';
import './Message.scss';
import { TMessage } from '../../@types';

type MessageProps = {
  message: TMessage;
};

function Message({ message }: MessageProps) {
  return (
    <Segment className={`message message-${message.id}`}>
      <p>{message.text}</p>
    </Segment>
  );
}

export default Message;
