import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { ChatState, TMessage } from '../../@types';

const initialState: ChatState = {
  messages: [],
  inputValue: '',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    changeInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },

    sendMessage(state) {
      const today = new Date();
      const formattedDate = new Intl.DateTimeFormat('fr-FR', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      }).format(today);

      const newMessage = {
        id: crypto.randomUUID(),
        content: state.inputValue,
        author: 'Moi',
        date: formattedDate,
      };

      state.messages.push(newMessage);

      state.inputValue = '';
    },

    addMessage(state, action: PayloadAction<TMessage>) {
      state.messages.push(action.payload);
    },
  },
});

export const { changeInputValue, sendMessage, addMessage } = chatSlice.actions;
export const selectIsMine = (state: RootState, author: string) =>
  state.login.pseudo === author;
export const selectMessages = (state: RootState) => state.chat.messages;
export default chatSlice.reducer;
