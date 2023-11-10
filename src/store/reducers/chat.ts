import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatState } from '../../@types';

const initialState: ChatState = {
  messages: [
    {
      id: crypto.randomUUID(),
      content: 'Salut!! comment ca va ?',
      author: 'Maxime',
    },
    {
      id: crypto.randomUUID(),
      content: 'Ca va oklm et toi ?',
      author: 'Bernard',
    },
    {
      id: crypto.randomUUID(),
      content: 'On est laaa',
      author: 'Maxime',
    },
  ],
  inputValue: '',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    changeInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },

    sendMessage(state, action: PayloadAction<string>) {
      const newMessage = {
        id: crypto.randomUUID(),
        content: action.payload,
        author: 'Maxime',
      };

      state.messages.push(newMessage);

      state.inputValue = '';
    },
  },
});

export const { changeInputValue, sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
