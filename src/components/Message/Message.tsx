import { TMessage } from '../../@types';
import './Message.scss';

type MessageProps = {
  message: TMessage;
  type: string;
};

function Message({ message, type }: MessageProps) {
  return (
    <div className={`segment segment--${type}`}>
      <div className="message">
        <span className="message__author">{message.author}</span>

        <div className={`message-bubble message-${message.id}`}>
          <p className="message__content">{message.content}</p>
        </div>
        <span className="message__date">à {message.date}</span>
      </div>
    </div>
  );
}

export default Message;
