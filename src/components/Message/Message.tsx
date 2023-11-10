import './Message.scss';
import { TMessage } from '../../@types';

type MessageProps = {
  message: TMessage;
  type: string;
};

function Message({ message, type }: MessageProps) {
  return (
    <div className={`segment ${type}`}>
      <div className="wrapper">
        <span>{message.author}</span>
        <div className={`message-bubble message-${message.id}`}>
          <p>{message.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
