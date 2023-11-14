import clsx from 'clsx';
import { TMessage } from '../../@types';
import { useAppSelector } from '../../hooks/redux';
import { selectIsMine } from '../../store/reducers/chat';
import './Message.scss';

type MessageProps = {
  message: TMessage;
};

function Message({ message }: MessageProps) {
  const isMine = useAppSelector((state) => selectIsMine(state, message.author));

  return (
    <div
      className={clsx('segment', {
        'segment--ping': isMine,
        'segment--pong': !isMine,
      })}
    >
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
