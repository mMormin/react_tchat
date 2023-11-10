import { TMessage } from '../../@types';
import './Message.scss';

type MessageProps = {
  message: TMessage;
  type: string;
};

function Message({ message, type }: MessageProps) {
  return (
    <div className={`segment segment--${type}`}>
      <div className="wrapper">
        <span>{message.author}</span>
        <div className={`message-bubble message-${message.id}`}>
          <p className="message-bubble__content">{message.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
