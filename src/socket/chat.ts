/* eslint-disable import/prefer-default-export */
import store from '../store';
import { addMessage, changeInputValue } from '../store/reducers/chat';
import { socket } from './io';

export const sendMessage = () => {
  const state = store.getState();

  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat('fr-FR', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).format(today);

  const message = {
    author: state.login.pseudo,
    content: state.chat.inputValue,
    date: formattedDate,
  };

  socket.emit('send_message', message);

  store.dispatch(changeInputValue(''));
};

export const subscribeToNewMessages = () => {
  socket.on('new_message', (message) => {
    store.dispatch(addMessage(message));
  });
};

export const unsubscribeToNewMessages = () => {
  socket.off('new_message');
};
